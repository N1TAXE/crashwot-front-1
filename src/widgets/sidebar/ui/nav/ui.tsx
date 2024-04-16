import { items } from './config';
import styles from './styles.module.scss';
import {NavLink} from "react-router-dom";
import {Icon} from "../../../../shared/ui/icon";

export const Nav = () => {
    return (
        <ul className={styles.nav}>
            {items.map((item, i) => {
                return (
                    <li key={i}>
                        <NavLink to={item.href} className={({ isActive }) =>
                            [
                                isActive ? styles.active : "",
                            ].join(" ")
                        }>
                            <Icon size={24} icon={item.icon}/>
                            {item.text}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    );
};