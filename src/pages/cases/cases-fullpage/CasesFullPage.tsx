import styles from './styles.module.scss'
import clsx from "clsx";
import {Button} from "../../../shared/ui/button";
import {ItemCard} from "../../../entities/item-card";
import Tooltip from "rc-tooltip";
import {Icon} from "../../../shared/ui/icon";
import {TooltipProps} from "rc-tooltip/lib/Tooltip";
import {Warning} from "../../../shared/ui/warning";
import {useUserStore} from "../../../app/stores/userStore.tsx";
import {testCaseData, testUserData} from "../../../shared/testData";
import {useParams} from "react-router-dom";
import {GetRarityName} from "../../../shared/utils";
import {EXTERNAL_LINKS} from "../../../shared/constants";
import {useEffect, useState} from "react";
import {DataCaseType, DataItemType} from "../../../shared/types";
import {Input} from "../../../shared/ui/input";

const tt: Omit<TooltipProps, 'children'> = {
    placement: 'top',
    trigger: ["hover"],
    overlay: `Получай опыт за открытие кейсов!`,
}
export const CasesFullPage = () => {
    const {user, setUser, setUserBalance} = useUserStore();
    const [caseData, setCaseData] = useState<DataCaseType>()
    const [lineItems, setLineItems] = useState<DataItemType[][]>([])
    const [cardWidth] = useState<number>(204)
    const [amount, setAmount] = useState<number>(1)

    const {altName} = useParams();

    useEffect(() => {
        setCaseData(testCaseData.find(item => item.altName === altName))
    }, [altName, caseData]);

    useEffect(() => {
        if (caseData) {
            setLineItems(prevState => [
                ...prevState,
                [
                    ...caseData.items
                ].sort(() => Math.random() - 0.5)
            ])
        }
    }, [amount, caseData]);
    
    if (!caseData) return <>Error...</>

    return (
        <div className={`container ${styles.content}`}>
            <div className={styles.caseWrapper}>
                <div className={styles.caseTitle}>
                    <h2>{caseData.title}</h2>
                    <Tooltip {...tt}>
                        <Button className={styles.badgeExp} size="small" color="dark">
                            + 50
                            <Icon icon="coins"/>
                        </Button>
                    </Tooltip>
                </div>
                <div className={styles.caseInfoWrapper}>
                    {lineItems[0] && Array.from({length: amount}, (_, i) => (
                        <div key={i} className={styles.caseInfo}>
                            <div className={styles.caseImage}>
                                <img src={caseData.image} alt={caseData.title}/>
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
                                    {lineItems[i].map((item) => (
                                        <div
                                            style={{
                                                transform: `translateX(-${cardWidth * 4}px)`
                                            }}
                                            key={item.id}
                                            className={clsx(styles.rouletteItem, styles[GetRarityName(item.rarity)!])
                                            }>
                                            <div className={styles.rouletteItemImage}>
                                                <img src={`${EXTERNAL_LINKS.STEAM_ITEMS}${item.image}`} alt={item.title}/>
                                            </div>
                                            <div className={styles.rouletteItemTitle}>
                                                {item.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    {!user && (
                        <div className={styles.warning}>
                            <Warning type="Error">
                                <h4>ВЫ НЕ АВТОРИЗОВАНЫ!</h4>
                                <p>Для открытия кейсов необходимо пройти авторизацию</p>
                            </Warning>
                        </div>
                    )}
                    {user && user.balance < caseData.price && (
                        <div className={styles.warning}>
                            <Warning type="Warn">
                                <h4>{caseData.price}₽ - НЕ ХВАТАЕТ {caseData.price - user.balance} ₽</h4>
                                <p>Недостаточно средств для открытия кейса</p>
                            </Warning>
                        </div>
                    )}
                </div>
                {user ? (
                    user.balance >= caseData.price ? (
                        <div className={styles.buttons}>
                            <div className={styles.buttonsAmount}>
                                <div className={styles.buttonsAmountItem}>
                                    <span>x1</span>
                                    <input type="radio" name="amount" value={1} onChange={(e) => setAmount(Number(e.target.value))} checked={amount === 1}/>
                                    <span></span>
                                </div>
                                <div className={styles.buttonsAmountItem}>
                                    <span>x2</span>
                                    <input type="radio" name="amount" value={2} onChange={(e) => setAmount(Number(e.target.value))} checked={amount === 2}/>
                                    <span></span>
                                </div>
                                <div className={styles.buttonsAmountItem}>
                                    <span>x3</span>
                                    <input type="radio" name="amount" value={3} onChange={(e) => setAmount(Number(e.target.value))} checked={amount === 3}/>
                                    <span></span>
                                </div>
                                <div className={styles.buttonsAmountItem}>
                                    <span>x4</span>
                                    <input type="radio" name="amount" value={4} onChange={(e) => setAmount(Number(e.target.value))} checked={amount === 4}/>
                                    <span></span>
                                </div>
                                <div className={styles.buttonsAmountItem}>
                                    <span>x5</span>
                                    <input type="radio" name="amount" value={5} onChange={(e) => setAmount(Number(e.target.value))} checked={amount === 5}/>
                                    <span></span>
                                </div>
                                <div className={styles.buttonsAmountItem}>
                                    <span>x10</span>
                                    <input type="radio" name="amount" value={10} onChange={(e) => setAmount(Number(e.target.value))} checked={amount === 10}/>
                                    <span></span>
                                </div>
                            </div>
                            <Button color="green" size="big" icon="bag">Открыть за {caseData.price}</Button>
                        </div>
                    ):(
                        <div className={styles.buttons}>
                            <Button onClick={() => setUserBalance(caseData.price)} color="green" size="big" icon="bag">Пополнить баланс</Button>
                        </div>
                    )
                ):(
                    <div className={styles.buttons}>
                        <Button onClick={() => setUser(testUserData)} color="green" size="big" icon="lock">Авторизация</Button>
                    </div>
                )}
            </div>
            <div className={styles.caseItems}>
                <h2>Содержимое кейса</h2>
                <div className={styles.caseItemsList}>
                    {caseData.items.map((item) => (
                        <ItemCard data={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}