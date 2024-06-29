import styles from './styles.module.scss'
import {useState} from "react";
import {UserListCard} from "../../shared/ui/userlist-card";
import {PATHS} from "../../shared/lib/react-router";
import {Tab} from "../../entities/tab";
import {Icon} from "../../shared/ui/icon";
import {GiveawayInfo} from "../../widgets/giveaway-info";
import {HowItWorksButton} from "../../entities/button-howitworks";
import {testContestData} from "../../shared/testData";
import {DataContestType} from "../../shared/types";
import {Button} from "../../shared/ui/button";
export const GiveawayPage = () => {
    const [tab, setTab] = useState(0);
    const data: DataContestType = testContestData
    return (
        <div className={`container ${styles.giveaway}`}>
            <div className={styles.tabs}>
                <Tab subtitle="6 дней 04:03:01" active={tab == 0} onClick={() => {tab != 0 && setTab(0)}}>Еженедельный розыгрыш</Tab>
                <Tab subtitle="6 часов 03:01" active={tab == 1} onClick={() => {tab != 1 && setTab(1)}}>Ежедневный розыгрыш</Tab>
            </div>
            <div className={styles.giveawayHeader}>
                <div className={styles.giveawayHeaderTitle}>
                    <h1>{tab === 0 ? 'Недельная раздача' : 'Ежедневная раздача'}</h1>
                    <HowItWorksButton/>
                </div>
                <div className={styles.giveawayHeaderTimer}>
                    <h4>До конца раздачи:</h4>
                    <span>{tab === 0 ? "6 дней 04:03:01" : "6 часов 03:01"}</span>
                </div>
            </div>
            <GiveawayInfo data={data}/>
            <div className={styles.giveawayUsers}>
                <div className={styles.giveawayUsersHeader}>
                    <h2>Условия участия</h2>
                    <span>
                        0 / {data.conditions.length}
                    </span>
                </div>
                <div className={styles.giveawayUsersList}>
                    {data.conditions.map((item, index) => (
                        <div key={index} className={styles.giveawayUsersListItem}>
                            <h4>{item.desc}</h4>
                            {item.link ? (
                                <Button as='a' target="_blank" href={item.link} color="green" size="small">Выполнить</Button>
                            ):(
                                <p>0 / {item.stats}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.giveawayUsers}>
                <div className={styles.giveawayUsersHeader}>
                    <h2>Список участников</h2>
                    <span>
                        32
                        <Icon icon="user"/>
                    </span>
                </div>
                <div className={styles.giveawayUsersList}>
                    {Array.from({length: 32}, (_, i) => (
                        <UserListCard key={i} to={PATHS.user.root(1)} userName="Nickname" userImage="https://avatars.steamstatic.com/a6ecea30fde7694f4ee2f5962b4338dec8ea1092_full.jpg"/>
                    ))}
                </div>
            </div>
        </div>
    )
}