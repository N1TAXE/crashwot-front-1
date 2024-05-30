import React from "react";
import {IColumnType, Table} from "../../../../shared/ui/table";
import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";

const columns: IColumnType<IData>[] = [
    {
        key: "id",
        title: "ID",
        render: (_, { id }) => (
            <span style={{color: "#6A6F76"}}>#{id}</span>
        ),
    },
    {
        key: "date",
        title: "Дата",
    },
    {
        key: "bet",
        title: "Ставка",
        render: (_, { bet }) => (
            <span className={styles.crashBet}>
                {bet} <Icon icon="bag"/>
            </span>
        ),
    },
    {
        key: "coef",
        title: "Коэфициент",
        render: (_, { coef, status }) => (
            <span className={`${styles.crashCoef} ${status ? styles.green : styles.red}`}>
                {coef}x
            </span>
        ),
    },
    {
        key: "result",
        title: "Результат",
        render: (_, { result, status }) => (
            <span className={`${styles.crashResult} ${status ? styles.green : styles.red}`}>
                <Icon icon="arrows"/> {result} <Icon icon="coins"/>
            </span>
        ),
    },
];

interface IData {
    id: string;
    date: string;
    bet: string;
    coef: string;
    result: string;
    status: boolean;
}

const data: IData[] = [
    {
        id: "13",
        date: "08.07.2023",
        bet: "234.67",
        coef: "3.21",
        result: "234.67",
        status: true
    },
    {
        id: "13",
        date: "08.07.2023",
        bet: "234.67",
        coef: "3.21",
        result: "234.67",
        status: false
    }
];

const TabCrash = () => {
    return (
        <React.Fragment>
            <Table data={data} columns={columns} />
        </React.Fragment>
    );
};

export default TabCrash;