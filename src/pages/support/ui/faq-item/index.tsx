import {useState} from "react";
import {Icon} from "../../../../shared/ui/icon";
import styles from './styles.module.scss'
import clsx from "clsx";

export type DataType = {
    id: number;
    title: string;
    text: string;
}

type FAQITemType = {
    data: DataType
}

export const FaqItem = ({data} : FAQITemType) => {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className={clsx(styles.item, isOpened && styles.opened)}>
            <div onClick={() => setIsOpened(prevState => !prevState)} className={styles.itemHead}>
                {data.title}
                {!isOpened ? (
                    <Icon icon="plus"/>
                ):(
                    <Icon icon="minus"/>
                )}
            </div>
            {isOpened && (
                <div className={styles.itemContent}>
                    {data.text}
                </div>
            )}
        </div>
    )
}