import { useEffect, useState } from "react";

type TimerHookReturnType = [
        number, // тип таймера, может быть как число, так и строкой в зависимости от decimal
    () => void,      // startTimer
    () => void,      // stopTimer
    (newInitialTime?: number) => void  // restartTimer
];

export const useTimer = ({
                             initialTime,
                             decimal = 0,
                             isIncrease = false,
                         }: {
    initialTime: number;
    decimal?: number;
    isIncrease?: boolean;
}): TimerHookReturnType => {
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
        }

        return () => clearInterval(interval);
    }, [decimal, isIncrease, isActive, initialTime]);

    const timer = Number(time.toFixed(decimal));

    if (decimal > 0) return [timer, startTimer, stopTimer, restartTimer];
    return [time, startTimer, stopTimer, restartTimer];
}