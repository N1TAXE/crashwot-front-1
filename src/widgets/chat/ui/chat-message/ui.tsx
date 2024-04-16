import {PATHS} from "../../../../shared/lib/react-router";
import styles from './styles.module.scss'
import clsx from "clsx";
import {NavLink} from "react-router-dom";
import {Button} from "../../../../shared/ui/button";

export const ChatMessage = () => {
    return (
        <div className={clsx(styles.message, styles.green)}>
            <NavLink to={PATHS.user.root(3)} className={styles.messageAvatar}>
                <img src="https://avatars.steamstatic.com/892663c574bc2716786540cdbb4e585b1d23406a_full.jpg" alt=""/>
            </NavLink>
            <div className={styles.messageInfo}>
                <div className={styles.user}>
                    <div className={styles.userInfo}>
                        <Button className={clsx(styles.nickname, styles.color0)}>
                            nickname
                        </Button>
                        <div className={styles.userLevel}>12</div>
                    </div>
                    <div className={styles.date}>20:11</div>
                </div>
                <div className={styles.messageText}>
                    <NavLink to={PATHS.user.root(1)}>@nickname, </NavLink> ну хз, я уже вывожу второй день подряд, все норм
                </div>
            </div>
        </div>
    );
};