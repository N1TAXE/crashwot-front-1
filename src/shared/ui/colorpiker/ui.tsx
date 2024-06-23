import styles from './styles.module.scss';
import {HTMLAttributes, useState} from "react";
import {Icon} from "../icon";

export interface ColorTypes {
    color: string
}

interface PickerProps extends HTMLAttributes<HTMLDivElement> {
    colors: ColorTypes[]
    name: string;
    label?: string;
}

export const useColorPicker = ({colors, label, name, ...rest}: PickerProps) => {
    const [active, setActive] = useState<number>(0);

    const component = (
        <div className={styles.inputItem}>
            {label ? <label htmlFor={name}>{label}</label> : null}
            <div className={styles.inputWrapper} {...rest}>
                {colors && colors.map((item, index) => (
                    <div className={styles.inputColorWrapper} key={index}>
                        <div className={`${styles.inputColor}${active === index ? ` ${styles.active}` : ''}`} style={{backgroundColor: item.color}}>
                            <Icon icon="check" size={12}/>
                            <input
                                type="radio"
                                name={name}
                                checked={active === index}
                                onChange={() => setActive(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return [active, component] as const;
};