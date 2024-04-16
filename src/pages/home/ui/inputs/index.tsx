import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
import {Input} from "../../../../shared/ui/input";
import {Button} from "../../../../shared/ui/button";
export const CrashGameInputs = () => {
    return (
        <div className={styles.card}>
            <div className={styles.balance}>
                <div className={styles.balanceInfoWrap}>
                    <div className={styles.balanceInfo}>
                        <span>100332</span>
                        <span>баланс</span>
                    </div>
                    <Icon icon='coins'/>
                </div>
                <Button color='green-dark' icon='add'/>
            </div>
            <div className={styles.column}>
                <Input label='Введите сумму' type='number' name='sum' icon='add'/>
                <div className={styles.flex}>
                    <Button size="small" color='dark-light'>20</Button>
                    <Button size="small" color='dark-light'>200</Button>
                    <Button size="small" color='dark-light'>500</Button>
                    <Button size="small" color='dark-light'>MAX</Button>
                </div>
            </div>
            <div className={styles.column}>
                <Input label='Автовывод' type='number' name='autowithdraw' icon='cog'/>
                <div className={styles.flex}>
                    <Button size="small" color='dark-light'>x1.1</Button>
                    <Button size="small" color='dark-light'>x1.5</Button>
                    <Button size="small" color='dark-light'>x2</Button>
                    <Button size="small" color='dark-light'>x5</Button>
                </div>
            </div>
            <Button size='medium' color='green'>Сделать ставку</Button>
        </div>
    )
}