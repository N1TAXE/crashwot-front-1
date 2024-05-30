import styles from './styles.module.scss'
import imgCrash from './images/crash.png'
import imgWithdraws from './images/withdraws.png'
import imgInventory from './images/inventory.png'
import {useState} from "react";
import TabCrash from "./crash";
import TabInventory from "./items";
import TabWithdraw from "./withdraw";
export const ProfileTabs = () => {
    const [currentTab, setCurrentTab] = useState<number>(0)
    const changeTab = (tab: number) => {
        if (currentTab !== tab) setCurrentTab(tab)
    }
    const getTabContent = () => {
        switch (currentTab) {
            default:
            case 0: return <TabCrash/>
            case 1: return <TabInventory/>
            case 2: return <TabWithdraw/>
        }
    }
    return (
        <div className={styles.tabs}>
            <div className={styles.tabsWrapper}>
                <div className={styles.tabsList}>
                <span className={currentTab === 0 ? styles.active : undefined} onClick={() => changeTab(0)}>
                    Crash
                    <img src={imgCrash} alt=""/>
                </span>
                    <span className={currentTab === 1 ? styles.active : undefined} onClick={() => changeTab(1)}>
                    Предметы
                    <img src={imgWithdraws} alt=""/>
                </span>
                    <span className={currentTab === 2 ? styles.active : undefined} onClick={() => changeTab(2)}>
                    Выводы
                    <img src={imgInventory} alt=""/>
                </span>
                </div>
            </div>
            {getTabContent()}
        </div>
    );
};