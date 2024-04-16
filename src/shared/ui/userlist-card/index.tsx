import styles from './styles.module.scss'
import {NavLink} from "react-router-dom";
interface CardProps {
    to: string;
    userName: string;
    userImage: string;
}
export const UserListCard = ({to, userName, userImage} : CardProps) => {
    return (
        <NavLink to={to} className={styles.item}>
            <span>
                {userName}
            </span>
            <span>
                <img src={userImage} alt=""/>
            </span>
        </NavLink>
    )
}