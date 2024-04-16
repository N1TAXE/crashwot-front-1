import styles from './styles.module.scss'
import {Button} from "../../../../shared/ui/button";
import {NavLink} from "react-router-dom";
export const CrashGameGiveaway = () => {
    return (
        <NavLink to='/' className={styles.card}>
            <div className={styles.text}>
                <span>Бесплатный розыгрыш!</span>
                <span>Успей принять участие!</span>
            </div>
            <div className={styles.timerWrapper}>
                <Button size="regular" color="red" icon="gift"/>
                <div className={styles.timer}>
                    <div className={styles.timerItem}>
                        <span>06</span>
                        <span>ДН.</span>
                    </div>
                    <div className={styles.timerItem}>
                        <span>23</span>
                        <span>ЧАС.</span>
                    </div>
                    <div className={styles.timerItem}>
                        <span>59</span>
                        <span>МИН.</span>
                    </div>
                    <div className={styles.timerItem}>
                        <span>59</span>
                        <span>СЕК.</span>
                    </div>
                </div>
            </div>
            <img src="https://catoolwebdav-net-cdn.gcdn.co/catool/cd181b3e2c4d547f6bb9bf12e720ff9d.png" alt=""/>
        </NavLink>
    )
}