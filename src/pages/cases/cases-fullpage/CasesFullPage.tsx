import styles from './styles.module.scss'
import clsx from "clsx";
import {Button} from "../../../shared/ui/button";
import {ItemCard} from "../../../entities/item-card";
import {Tooltip, ToolTipTypes} from "../../../shared/ui/tooltip";
export const CasesFullPage = () => {
    const tt: ToolTipTypes = {
        direction: 'top',
        icon: "star",
        content: `Получай опыт за открытие кейсов!`,
    }
    return (
        <div className={`container ${styles.content}`}>
            <div className={styles.caseWrapper}>
                <div className={styles.caseTitle}>
                    <h2>Название кейса</h2>
                    <Button className={styles.badgeExp} size="small" color="dark">
                        + 50
                        <Tooltip {...tt} />
                    </Button>
                </div>
                <div className={styles.caseInfoWrapper}>
                    <div className={styles.caseInfo}>
                        <div className={styles.caseImage}>
                            <img src="https://ggdrop.in/public/storage/cases/unlhEiMgQJ8iH8z6cb9ruZFyTuf4uZ8t8jS2aDmQ.png" alt=""/>
                        </div>
                        <div className={styles.arrows}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.83467 16.6154C7.79704 18.4615 10.203 18.4615 11.1653 16.6154L17.6613 4.15385C18.6237 2.3077 17.4207 0 15.496 0H2.50403C0.5793 0 -0.623659 2.30769 0.338707 4.15385L6.83467 16.6154Z" fill="#92E7A5"/>
                            </svg>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.83467 1.38462C7.79704 -0.461537 10.203 -0.46154 11.1653 1.38461L17.6613 13.8462C18.6237 15.6923 17.4207 18 15.496 18H2.50403C0.5793 18 -0.623659 15.6923 0.338707 13.8462L6.83467 1.38462Z" fill="#92E7A5"/>
                            </svg>
                        </div>
                        <div className={styles.roulette}>
                            <div className={styles.rouletteRoot}>
                                {Array.from({length: 10}, (_, i) => (
                                    <div key={i} className={clsx(styles.rouletteItem, styles.colorRestricted)}>
                                        <div className={styles.rouletteItemImage}>
                                            <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRd4cJ5ntbN9J7yjRqxr0M6Z2v3IdWUIA8-YlmD_AW6wO7shZbv6ZudnHM1u3V0t3jYmx22n1gSORPnfTIP/150fx112f" alt=""/>
                                        </div>
                                        <div className={styles.rouletteItemTitle}>
                                            Item Title
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.warning}>
                            <h4>ВЫ НЕ АВТОРИЗОВАНЫ!</h4>
                            <p>Для открытия кейсов необходимо пройти авторизацию</p>
                        </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button color="green" size="big" icon="bag">Пополнить баланс</Button>
                </div>
            </div>
            <div className={styles.caseItems}>
                <h2>Содержимое кейса</h2>
                <div className={styles.caseItemsList}>
                    {Array.from({length: 32}, (_, i) => (
                        <ItemCard key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}