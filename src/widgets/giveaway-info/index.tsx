import styles from './styles.module.scss'
import {Button} from "../../shared/ui/button";
import {useModalStore} from "../../app/stores";
import {DataContestType} from "../../shared/types";
import ModalContestConditions from "../../entities/modals/ModalContestConditions.tsx";

export const GiveawayInfo = ({data}: {data: DataContestType}) => {
    const {openModal} = useModalStore()
    return (
        <div className={styles.giveawayInfo}>
            <h1>{data.prize}</h1>
            <div className={styles.giveawayInfoImage}>
                <img src={data.image} alt=""/>
            </div>
            <div className={styles.giveawayInfoButtons}>
                <Button onClick={() => openModal(<ModalContestConditions data={data}/>)} size="medium" color="dashed" icon="add">Условия участия</Button>
                <Button size="medium" color="orange" icon="pointer">Участвовать</Button>
            </div>
        </div>
    )
}