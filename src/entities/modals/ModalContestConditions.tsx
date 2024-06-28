import React, {Fragment} from 'react';
import styles from "./styles.module.scss";
import {Icon} from "../../shared/ui/icon";
import {DataContestType} from "../../shared/types";

const ModalContestConditions = ({data}: {data: DataContestType}) => {
    return (
        <Fragment>
            <div className={styles.modalHeader}>
                <Icon icon="cog"/>
                <span>Условия участия в розыгрыше</span>
            </div>
            <div className={styles.modalContent}>
                {data.conditions.map((item, index) => (
                    <div key={index} className={styles.modalCondition}>
                        {item.desc}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default ModalContestConditions;