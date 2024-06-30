import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
import {useAnimation, useTimer} from "../../../../shared/lib/hooks";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {useCrashStore} from "../../../../app/stores/useCrashStore.tsx";
export const CrashGameAnimation = () => {
    const {state, setState} = useCrashStore()
    const ctRef = useRef<HTMLElement>(null)
    const [finalCoef, setFinalCoef] = useState<number>(null)
    const [isIncreaseCount, setIsIncreaseCount] = useState<boolean>(false)
    const [ct] = useAnimation({
        ref: ctRef,
        name: "CSGO",
        config: {
            preserveDrawingBuffer: false,
            viewport: {
                x: -(1080 / 2),
                y: 0,
                width: 1080,
                height: 1080,
            },
            animation: "start"
        }
    });

    const [count, startCountTimer, stopCountTimer, restartCountTimer] = useTimer({
        initialTime: 10,
        decimal: 2,
        isIncrease: isIncreaseCount,
    });

    useEffect(() => {
        if (ct) {
            startCountTimer()
        }
    }, [ct]);

    useEffect(() => {
        if (count <= 0) {
            ct?.setAnimation('Run', true)
            setState(1);
            setIsIncreaseCount(true);
            restartCountTimer(1);
            const min = 1.00;
            const max = 10.00;
            const randomValue = (min + Math.random() * (max - min)).toFixed(2);
            console.log(randomValue)
            setFinalCoef(randomValue);
        }
    }, [count]);

    useEffect(() => {
        if (finalCoef && state === 1 && count >= finalCoef) {
            stopCountTimer()
            ct?.setAnimation('Die', false)
            setTimeout(() => {
                setState(0)
                setIsIncreaseCount(false)
                restartCountTimer(10)
                ct?.setAnimation('start', false)
            }, 5000)
        }
    }, [state, finalCoef, count]);
    
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                {state === 0 ? (
                    <div className={styles.timer}>
                    <span>
                        {count} сек
                    </span>
                        До следующей игры
                    </div>
                ) : (
                    <div className={`${styles.timer}${count >= finalCoef ? ` ${styles.timerCrash}` : ''}`}>
                        <span>
                            x{count}
                        </span>
                        Множитель
                    </div>
                )}
                <div className={styles.stats}>
                    <span>
                        <Icon icon='bag'/>
                        32
                    </span>
                    <span>
                        <Icon icon='user'/>
                        32
                    </span>
                </div>
            </div>
            <div ref={ctRef as MutableRefObject<HTMLDivElement>} className={styles.animation}></div>
            <div className={styles.road}></div>
        </div>
    )
}