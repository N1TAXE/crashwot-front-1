import {ItemCard} from "../../../../entities/item-card";
import styles from './styles.module.scss'
import {useEffect, useState} from "react";
import {DataItemType} from "../../../../shared/types";
import {testItemsData} from "../../../../shared/testData";
const TabInventory = () => {
    const [data, setData] = useState<DataItemType[]>()

    useEffect(() => {
        setData(testItemsData)
    }, []);

    if (!data) return <>Error...</>

    return (
        <div className={styles.inventory}>
            {data.map((item) => (
                <ItemCard key={item.id} data={item}/>
            ))}
        </div>
    );
};

export default TabInventory;