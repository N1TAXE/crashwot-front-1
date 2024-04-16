import styles from './styles.module.scss'
import {Button} from "../../shared/ui/button";

type GiveAwayInfoProps = {
    data: object;
}
export const GiveawayInfo = ({data}: GiveAwayInfoProps) => {
    return (
        <div className={styles.giveawayInfo}>
            <h1>{data.prize}</h1>
            <div className={styles.giveawayInfoImage}>
                <img src={data.image} alt=""/>
            </div>
            <div className={styles.giveawayInfoButtons}>
                <Button size="medium" color="dashed" icon="add">Условия участия</Button>
                <Button size="medium" color="orange" icon="pointer">Участвовать</Button>
            </div>
        </div>
    )
}