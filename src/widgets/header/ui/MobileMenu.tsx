import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";
import {PATHS} from "../../../shared/lib/react-router";
import {Icon} from "../../../shared/ui/icon";
import {useUserStore} from "../../../app/stores/userStore.tsx";
import {Button} from "../../../shared/ui/button";
export const MobileMenu = ({isActive, setIsActive}: { isActive: boolean, setIsActive: (bool: boolean) => void }) => {
    const {user, clearUser} = useUserStore();
    const onClick = () => {
        setIsActive(false)
    }
    if (isActive) return (
        <div className={styles.headerMobile}>
            <div className={styles.headerMobileMainList}>
                <NavLink to={PATHS.root} onClick={onClick} className={styles.headerMobileLinkMain}>
                    Crash
                    <Icon icon="crashgame"/>
                </NavLink>
                <NavLink to={PATHS.cases.list()} onClick={onClick} className={styles.headerMobileLinkMain}>
                    Кейсы
                    <Icon icon="case"/>
                </NavLink>
                <NavLink to={PATHS.giveaway} onClick={onClick} className={styles.headerMobileLinkMain}>
                    Розыгрыши
                    <Icon icon="gift"/>
                </NavLink>
                <NavLink to={PATHS.top} onClick={onClick} className={styles.headerMobileLinkMain}>
                    ТОП игроков
                    <Icon icon="user"/>
                </NavLink>
                <NavLink to={PATHS.support} onClick={onClick} className={styles.headerMobileLinkMain}>
                    Помощь
                    <Icon icon="cog"/>
                </NavLink>
                {user && (
                    <div onClick={clearUser} className={styles.headerMobileLinkMain}>
                        Выход
                        <Icon icon="logout"/>
                    </div>
                )}
            </div>
        </div>
    )
}