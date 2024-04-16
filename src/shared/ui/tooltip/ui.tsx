import styles from './styles.module.scss'
import {Icon, IconTypes} from "../icon";
import clsx from "clsx";
export type ToolTipTypes = {
    title?: string;
    icon?: IconTypes | null;
    content: string;
    direction: string;
}
export const Tooltip = ({
                            title = "",
                     icon = null,
                     content = "",
                     direction = 'center',
                 } : ToolTipTypes) => {
    return (
        <div className={styles.tooltipWrapper}>
            {title && <p>{title}</p>}
            {icon && <Icon icon={icon} />}
            <div
                className={clsx(styles.tooltip, styles[direction])}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};