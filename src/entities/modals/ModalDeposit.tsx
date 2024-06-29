import React, {useState} from 'react';
import styles from "./styles.module.scss";
import {Icon} from "../../shared/ui/icon";
import clsx from "clsx";
import {Input} from "../../shared/ui/input";
import {Button} from "../../shared/ui/button";
import {PAYMENT_METHODS} from "../../shared/constants";
import {METHODS} from "../../shared/images/methods";

const ModalDeposit = () => {
    const [active, setActive] = useState<number>(0)
    return (
        <div className={clsx(styles.modalContentInner, styles.flexRow, styles.deposit)}>
            <div className={styles.modalRowItem}>
                <div className={styles.modalHeader}>
                    <Icon icon="cog"/>
                    <span>Выбор метода оплаты</span>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.modalContentMethods}>
                        {PAYMENT_METHODS.map((item, index) => (
                            <div key={index} className={`${styles.modalContentMethodsItem}${active === index ? ` ${styles.active}` : ''}`}>
                                <input
                                    type="radio"
                                    name="method"
                                    checked={active === index}
                                    onChange={() => setActive(index)}
                                />
                                <div className={styles.modalContentMethodsItemBG}/>
                                <img src={METHODS[item.name]} alt={item.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.modalRowItem}>
                <div className={styles.modalHeader}>
                    <Icon icon="cog"/>
                    <span>Введите сумму в рублях</span>
                </div>
                <div className={styles.modalContent}>
                    <Input placeholder="Сумма" name="sum" type="number"/>
                    <Input placeholder="Промокод (Если есть)" name="promo" type="number"/>
                    <span className={styles.stats}>Использован промокод: <p className={styles.green}>+15%</p></span>
                    <span className={styles.stats}>На баланс поступит: <p className={styles.yellow}>+15%</p></span>
                    <Button icon="bag" color="green" size="big">Пополнить</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalDeposit;