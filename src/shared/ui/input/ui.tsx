import styles from './styles.module.scss'
import {Icon, IconTypes} from "../icon";
import {HTMLInputTypeAttribute} from "react";

type InputProps = {
    label: string;
    name: string;
    type: HTMLInputTypeAttribute;
    icon?: IconTypes;
}
export const Input = ({label, name, type, icon} : InputProps) => {
    return (
        <div className={styles.inputItem}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.inputWrapper}>
                <input name={name} type={type} placeholder={label}/>
                {icon ? (<Icon icon={icon}/>) : null}
            </div>
        </div>
    )
}