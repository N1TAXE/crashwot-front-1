import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
import {useAnimation} from "../../../../shared/lib/utils";
import {MutableRefObject, useEffect, useRef} from "react";
export const CrashGameAnimation = () => {
    const ctRef = useRef<HTMLElement>(null)
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

    const setAnim = () => {
        ct?.setAnimation("Run")
        console.log(ct)
    }
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <div className={styles.timer}>
                    <span onClick={setAnim}>
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
            <div ref={ctRef as MutableRefObject<HTMLDivElement>} className={styles.animation}></div>
            <div className={styles.road}></div>
        </div>
    )
}