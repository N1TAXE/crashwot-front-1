import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
export const CrashGameAnimation = () => {
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
            <div className={styles.road}></div>
        </div>
    )
}