import {Outlet} from "react-router-dom";
import {Sidebar} from "../../sidebar";
import styles from './styles.module.scss'
import {Header} from "../../header";
import {Chat} from "../../chat";

export function MainLayout() {
    return (
        <main>
            <Sidebar/>
            <Chat/>
            <section className={styles.content}>
                <Header/>
                <Outlet />
            </section>
        </main>
    );
}