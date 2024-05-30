import styles from './styles.module.scss'
import {Icon, IconTypes} from "../icon";
import {FC, HTMLInputTypeAttribute, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: HTMLInputTypeAttribute;
    label?: string;
    icon?: IconTypes;
}
export const Input: FC<InputProps> = ({label, name, type, icon, ...rest}) => {
    return (
        <div className={styles.inputItem}>
            {label ? <label htmlFor={name}>{label}</label> : null}
            <div className={styles.inputWrapper}>
                <input name={name} type={type} placeholder={label} {...rest}/>
                {icon ? (<Icon icon={icon}/>) : null}
            </div>
        </div>
    )
}