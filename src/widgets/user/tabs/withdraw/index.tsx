import {IColumnType, Table} from "../../../../shared/ui/table";
import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
import React from "react";

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
        key: "method",
        title: "Метод"
    },
    {
        key: "requisites",
        title: "Реквизиты"
    },
    {
        key: "sum",
        title: "Сумма",
        render: (_, { sum }) => (
            <span className={styles.withdrawSum}>
                {sum} <Icon icon="coins"/>
            </span>
        ),
    },
    {
        key: "status",
        title: "Статус",
        render: (_, { status }) => (
            <span className={`${styles.withdrawStatus} ${status === 'Успешно' ? styles.green : styles.red}`}>
                {status}
            </span>
        ),
    }
];

interface IData {
    id: string;
    date: string;
    method: string;
    requisites: string;
    sum: string;
    email: string;
    status: string;
}

const data: IData[] = [
    {
        id: "13",
        date: "08.07.2023",
        method: "VISA/MASTERCARD",
        requisites: "****1234",
        sum: "5032.43",
        email: "antoshper@mail.ru",
        status: "Успешно"
    },
    {
        id: "13",
        date: "08.07.2023",
        method: "VISA/MASTERCARD",
        requisites: "****1234",
        sum: "5032.43",
        email: "antoshper@mail.ru",
        status: "Ошибка"
    }
];

const TabWithdraw = () => {
    return (
        <React.Fragment>
            <Table data={data} columns={columns} />
        </React.Fragment>
    );
};

export default TabWithdraw;