import styles from './styles.module.scss'
import {Button} from "../../../../shared/ui/button";
export const CrashGamePromoBanner = () => {
    return (
        <div className={styles.card}>
            +40% к балансу!
            <Button size='regular' color='green'>Активировать</Button>
        </div>
    )
}