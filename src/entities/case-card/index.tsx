import {PATHS} from "../../shared/lib/react-router";
import styles from "./styles.module.scss";
import {Button} from "../../shared/ui/button";
import {NavLink} from "react-router-dom";
import Tooltip from "rc-tooltip"
import {Icon} from "../../shared/ui/icon";
import {TooltipProps} from "rc-tooltip/lib/Tooltip";
import {DataCaseType} from "../../shared/types";
const tt: Omit<TooltipProps, 'children'> = {
    placement: 'top',
    trigger: ["hover"],
    overlay: `Получай опыт за открытие кейсов!`,
}
export const CaseCard = ({data} : {data: DataCaseType}) => {
    return (
        <NavLink to={PATHS.cases.root(data.altName)} className={styles.caseItem}>
            <Tooltip {...tt}>
                <Button className={styles.badgeExp} size="small" color="dark">
                    + 50
                    <Icon icon="coins"/>
                </Button>
            </Tooltip>
            <div className={styles.caseItemImage}>
                <img src={data.image} alt=""/>
            </div>
            <div className={styles.caseItemInfo}>
                <h4>{data.title}</h4>
                <div className={styles.caseItemButtons}>
                    <Button as='span' icon="coins" size="regular" color="dark">{data.price}</Button>
                    <Button color='green-dark' size='regular'>Открыть</Button>
                </div>
            </div>
        </NavLink>
    )
}