import { useEffect, useState } from "react";

export function useTimer({
                             initialTime,
                             decimal = 0,
                             isIncrease = false,
                         }: {
    initialTime: number;
    decimal?: number;
    isIncrease?: boolean;
}) {
    const [time, setTime] = useState<number>(initialTime);
    const [isActive, setIsActive] = useState<boolean>(false);

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const restartTimer = (newInitialTime?: number) => {
        setTime(newInitialTime || initialTime);
        setIsActive(true);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    if (!isIncrease) return parseFloat((prevTime - 0.01).toFixed(decimal));
                    return parseFloat((prevTime + 0.01).toFixed(decimal));
                });
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [decimal, isIncrease, isActive, initialTime]);

    const timer = time.toFixed(decimal);

    if (decimal > 0) return [timer, startTimer, stopTimer, restartTimer];
    return [time, startTimer, stopTimer, restartTimer];
}