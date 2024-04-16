import styles from './styles.module.scss';
import {Nav} from "./nav";

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <Nav/>
        </aside>
    );
};