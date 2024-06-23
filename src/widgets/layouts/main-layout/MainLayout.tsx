import {Outlet} from "react-router-dom";
import {Sidebar} from "../../sidebar";
import styles from './styles.module.scss'
import {Header} from "../../header";
import {Chat} from "../../chat";
import {useChatStore} from "../../../app/stores";

export function MainLayout() {
    const { chatData } = useChatStore();
    return (
        <main>
            <Sidebar/>
            <Chat/>
            <section className={`${styles.content}${chatData.isOpened ? ` ${styles.chatOpened}` : ''}`}>
                <Header/>
                <Outlet />
            </section>
        </main>
    );
}