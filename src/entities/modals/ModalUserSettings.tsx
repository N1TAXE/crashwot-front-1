import styles from './styles.module.scss'
import React, {Fragment} from 'react';
import {Icon} from "../../shared/ui/icon";
import {Input} from "../../shared/ui/input";

const ModalUserSettings = () => {
    return (
        <Fragment>
            <div className={styles.modalHeader}>
                <Icon icon="cog"/>
                <span>Кастомизация</span>
            </div>
            <form className={styles.modalContent}>
                <Input className={styles.userSettingsInput} label="Ваш никнейм" name="nickname" disabled={true} type="test" value="nickname"/>
            </form>
        </Fragment>
    );
};

export default ModalUserSettings;