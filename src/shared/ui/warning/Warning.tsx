import React, {FC, HTMLAttributes} from 'react';
import styles from "./styles.module.scss";
import clsx from "clsx";

interface WarningProps extends HTMLAttributes<HTMLDivElement> {
    type: 'Warn' | 'Error' | 'Success' | 'Info';
}

export const Warning: FC<WarningProps> = ({type = 'Warn', children, ...rest}) => {
    return (
        <div className={clsx(styles.warning, styles[`warning${type}`])} {...rest}>
            {children}
        </div>
    );
};