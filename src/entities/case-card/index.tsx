import {PATHS} from "../../shared/lib/react-router";
import styles from "./styles.module.scss";
import {Button} from "../../shared/ui/button";
import {NavLink} from "react-router-dom";
import {Tooltip, ToolTipTypes} from "../../shared/ui/tooltip";

export const CaseCard = () => {
    const tt: ToolTipTypes = {
        direction: 'top',
        icon: "coins",
        content: `Получай опыт за открытие кейсов!`,
    }
    return (
        <NavLink to={PATHS.cases.root('test')} className={styles.caseItem}>
            <Button className={styles.badgeExp} size="small" color="dark">
                + 50
                <Tooltip {...tt} />
            </Button>
            <div className={styles.caseItemImage}>
                <img src="https://ggdrop.in/public/storage/cases/HVjuHCrgO8Vx8HpCoL5Ni0wfCkFUWJnVymVfCvzX.png" alt=""/>
            </div>
            <div className={styles.caseItemInfo}>
                <h4>Снежная граната</h4>
                <div className={styles.caseItemButtons}>
                    <Button as='span' icon="coins" size="regular" color="dark">85</Button>
                    <Button color='green-dark' size='regular'>Открыть</Button>
                </div>
            </div>
        </NavLink>
    )
}