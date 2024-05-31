import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
import {useAnimation} from "../../../../shared/lib/utils";
import {useEffect, useRef} from "react";
export const CrashGameAnimation = () => {
    const tankRef = useRef()
    const [tank] = useAnimation({
        ref: tankRef,
        name: "tank",
        viewport: {
            x: -608,
            y: 0,
            width: 608 * 2,
            height: 304 * 2,
        },
    });
    useEffect(() => {
        if (tank) {
            console.log(tank)
        }
    }, [tank]);
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <div className={styles.timer}>
                    <span>
                        13.53 сек
                    </span>
                    До следующей игры
                </div>
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
            <div ref={tankRef} className={styles.animation}></div>
            <div className={styles.road}></div>
        </div>
    )
}