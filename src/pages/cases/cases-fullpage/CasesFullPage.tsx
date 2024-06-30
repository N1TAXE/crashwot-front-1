import styles from './styles.module.scss'
import {Button} from "../../../shared/ui/button";
import {ItemCard} from "../../../entities/item-card";
import Tooltip from "rc-tooltip";
import {Icon} from "../../../shared/ui/icon";
import {TooltipProps} from "rc-tooltip/lib/Tooltip";
import {Warning} from "../../../shared/ui/warning";
import {useUserStore} from "../../../app/stores/userStore.tsx";
import {testCaseData, testUserData} from "../../../shared/testData";
import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {DataCaseType, DataItemType} from "../../../shared/types";
import RouletteLine from "./RouletteLine.tsx";
import {getRandomElements, replaceFromEnd} from "../../../shared/utils";

const tt: Omit<TooltipProps, 'children'> = {
    placement: 'top',
    trigger: ["hover"],
    overlay: `Получай опыт за открытие кейсов!`,
}

const prize: DataItemType = {
    id: 4256,
    title: "AUG | Резной нефрит",
    image: "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAZt7PnJdTh94NWxnJS0m_bmNL6fkzxSu5Io2LvE8933iwLi8hFlMT3yItKQIFNrZAzT-ljqyOm-1JbpvoOJlyV6jJMV5w",
    rarity: 1,
    price: 199
}

export const CasesFullPage = () => {
    const {user, setUser, setUserBalance} = useUserStore();
    const [caseData, setCaseData] = useState<DataCaseType>()
    const [lineItems, setLineItems] = useState<DataItemType[][]>([])
    const [amount, setAmount] = useState<number>(1)
    const [prizes, setPrizes] = useState<DataItemType[]>([])
    const itemNum = 60
    const itemPrizePos = 5
    const {altName} = useParams();
    const [openingState, setOpeningState] = useState<number>(0)
    const animationLength = 10

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
        const newPrizes = Array.from({ length: amount }, () => prize)
        setPrizes(newPrizes)

        const newLineItemsArray = Array.from({ length: amount }, () => [
            ...getRandomElements(caseData.items, itemNum)
        ])

        const newLineItemsArrayWithPrizes = replaceFromEnd(newLineItemsArray, itemPrizePos, newPrizes)
        setLineItems(newLineItemsArrayWithPrizes)
        setOpeningState(1)
        setTimeout(() => {
            setOpeningState(2)
        }, 10000)
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
                        <RouletteLine animLength={animationLength} prizePos={itemPrizePos} openingState={openingState} key={i} lineItems={lineItems[i]} caseData={caseData}/>
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
                            {openingState === 0 ? (
                                    <Fragment>
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
                                        <Button onClick={handleOpen} color="green" size="big" icon="bag">Открыть за {caseData.price}</Button>
                                    </Fragment>
                            ) : openingState === 1 ? (
                                <>Открываем кейс...</>
                            ) : (
                                    <Fragment>
                                        <Button onClick={() => setOpeningState(0)} color="dark" size="big" icon="bag">Попробовать еще раз</Button>
                                        <Button onClick={() => setOpeningState(0)} color="green" size="big" icon="bag">Продать всё за {prizes.reduce((total, prize) => total + prize.price, 0)}</Button>
                                        <Button onClick={() => setOpeningState(0)} color="dark" size="big" icon="bag">Забрать</Button>
                                    </Fragment>
                                )}
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