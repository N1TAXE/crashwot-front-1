import styles from './styles.module.scss'
import {forwardRef, HTMLAttributes} from "react";
import clsx from "clsx";
interface TabProps extends HTMLAttributes<HTMLSpanElement> {
    subtitle?: string;
    active?: boolean;
}
export const Tab = forwardRef<HTMLSpanElement, TabProps>(({children, subtitle, active, ...props}, ref) => {
    return (
        <div className={clsx(styles.tab, active ? styles.active: null)} {...props}>
            {children}
            <span ref={ref}>{subtitle}</span>
        </div>
    )
})