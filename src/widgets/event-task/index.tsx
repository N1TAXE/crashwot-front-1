import styles from './styles.module.scss'
import {useState} from "react";
import {Icon} from "../../shared/ui/icon";
import {Button} from "../../shared/ui/button";
type EventTaskProps = {
    data: any;
}
export const EventTask = ({data} : EventTaskProps) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={styles.taskItem}>
            <div className={styles.taskItemInfo}>
                {data.text}
            </div>
            <div className={styles.taskItemPrize}>
                {data.coins}
                <Icon icon="coins"/>
            </div>
            {isActive ? (
                <Button disabled size="small" color="blue">Начато</Button>
            ):(
                <Button onClick={() => setIsActive(true)} size="small" color="blue">Начать</Button>
            )}
        </div>
    )
}