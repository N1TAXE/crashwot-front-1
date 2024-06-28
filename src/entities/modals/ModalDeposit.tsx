import React from 'react';
import styles from "./styles.module.scss";
import {Icon} from "../../shared/ui/icon";
import clsx from "clsx";

const ModalDeposit = () => {
    return (
        <div className={clsx(styles.modalContentInner, styles.flexRow, styles.deposit)}>
            <div className={styles.modalRowItem}>
                <div className={styles.modalHeader}>
                    <Icon icon="cog"/>
                    <span>Уровни профиля</span>
                </div>
                <div className={styles.modalContent}>
                    test
                </div>
            </div>
            <div className={styles.modalRowItem}>
                <div className={styles.modalHeader}>
                    <Icon icon="cog"/>
                    <span>Реферальная система</span>
                </div>
                <div className={styles.modalContent}>
                    test
                </div>
            </div>
        </div>
    );
};

export default ModalDeposit;