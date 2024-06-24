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
import {useEffect, useState} from "react";
import {DataCaseType, DataItemType} from "../../../shared/types";
import RouletteLine from "./RouletteLine.tsx";

const tt: Omit<TooltipProps, 'children'> = {
    placement: 'top',
    trigger: ["hover"],
    overlay: `Получай опыт за открытие кейсов!`,
}
export const CasesFullPage = () => {
    const {user, setUser, setUserBalance} = useUserStore();
    const [caseData, setCaseData] = useState<DataCaseType>()
    const [lineItems, setLineItems] = useState<DataItemType[][]>([])
    const [amount, setAmount] = useState<number>(1)
    const [prizes, setPrizes] = useState<DataItemType[]>([])

    const {altName} = useParams();

    useEffect(() => {
        setCaseData(testCaseData.find(item => item.altName === altName))
    }, [altName, caseData]);

    useEffect(() => {
        if (caseData) {
            setLineItems(prevState => {
                const arraysToAdd = amount - prevState.length;
                if (arraysToAdd > 0) {
                    return [
                        ...prevState,
                        ...Array.from({ length: arraysToAdd }, () => [
                            ...caseData.items
                        ].sort(() => Math.random() - 0.5))
                    ];
                }
                return prevState;
            });
        }
    }, [amount, caseData]);

    const handleOpen = () => {
        console.log('test')
    }
    
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
                    {Array.from({length: amount}, (_, i) => (
                        <RouletteLine key={i} lineItems={lineItems[i]} caseData={caseData}/>
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