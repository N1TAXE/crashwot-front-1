import {ItemCard} from "../../../../entities/item-card";
import styles from './styles.module.scss'

const TabInventory = () => {
    return (
        <div className={styles.inventory}>
            {Array.from({length: 32}, (_, i) => (
                <ItemCard key={i}/>
            ))}
        </div>
    );
};

export default TabInventory;