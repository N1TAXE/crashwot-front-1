import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
import clsx from "clsx";
import {NavLink} from "react-router-dom";
export const CrashGamePlayers = () => {
    return (
        <div className={styles.list}>
            {Array.from({length: 10}, (_, i) =>
                <div key={i} className={clsx(styles.item, styles.green)}>
                    <NavLink to='/' className={styles.player}>
                        <div className={styles.playerAvatar}>
                            <img src="https://avatars.steamstatic.com/892663c574bc2716786540cdbb4e585b1d23406a_full.jpg" alt=""/>
                        </div>
                        <div className={styles.playerName}>
                            Nickname
                        </div>
                    </NavLink>
                    <div className={styles.block}>
                        <div className={styles.playerBet}>
                            322
                            <Icon icon='coins'/>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.playerCoef}>
                            В игре
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.playerResult}>
                            <Icon icon='arrows'/>
                            322
                            <Icon icon='coins'/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}