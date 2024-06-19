import {useEffect, useState} from "react";

export function useTimer({ initialTime, decimal = 0} : {initialTime : number; decimal?: number}) {
    const [time, setTime] = useState<number>(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return parseFloat((prevTime - 0.01).toFixed(decimal));
            });
        }, 10);

        return () => clearInterval(interval);
    }, []);
    const timer = time.toFixed(decimal);
    
    if (decimal > 0) return [timer]
    return [time]
}