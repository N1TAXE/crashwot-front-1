import React from 'react';
import styles from "./styles.module.scss";
import {Icon} from "../../shared/ui/icon";
import clsx from "clsx";
import {Input} from "../../shared/ui/input";
import {Button} from "../../shared/ui/button";

const ModalDeposit = () => {
    return (
        <div className={clsx(styles.modalContentInner, styles.flexRow, styles.referrals)}>
            <div className={styles.modalRowItem}>
                <div className={styles.modalHeader}>
                    <Icon icon="cog"/>
                    <span>Уровни профиля</span>
                </div>
                <div className={clsx(styles.modalContent, styles.modalContentLevels)}>
                    {Array.from({length: 10}, (_, i) => (
                        <div key={i} className={`${styles.lvlItem}${i === 0 ? ` ${styles.active}` : ''}`}>
                            <div className={styles.lvlItemFlex}>
                                <div className={styles.lvlItemLvl}>
                                    {i+1} LVL
                                </div>
                                <div className={styles.lvlItemReq}>
                                    {i === 0 ? `0`: ((i+1)*100)}
                                </div>
                            </div>
                            <span>{i === 0 && `Ваш бонус -`} {i+1}%</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.modalRowItem}>
                <div className={styles.modalHeader}>
                    <Icon icon="cog"/>
                    <span>Реферальная система</span>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.modalContentCard}>
                        <h4>Приглашено пользователей</h4>
                        <div className={clsx(styles.modalContentCardItem, styles.invites)}>
                            <span>
                                <h3>321321</h3>
                                <p>Новых</p>
                            </span>
                            <span>
                                <h3>321321312321</h3>
                                <p>Всего</p>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(styles.modalContentCard, styles.income)}>
                        <h4>Ваш доход</h4>
                        <span>
                            231321
                        </span>
                    </div>
                    <Input name="balance" type="text" icon="coins" value={21321312} disabled label="Реферальный баланс"/>
                    <Button icon="bag" size="big" color="green">Получить</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalDeposit;