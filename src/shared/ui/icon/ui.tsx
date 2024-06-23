import clsx from 'clsx';
import styles from './styles.module.scss';
import {InputHTMLAttributes} from "react";

export type IconTypes = 'star' | 'pointer' | 'logout' | 'minus' | 'plus' | 'case' | 'crashgame' | 'lc' | 'vk' | 'wg' | 'add' | 'arrow' | 'arrows' | 'bag' | 'chat' | 'check' | 'clock' | 'cog' | 'coins' | 'copy' | 'cross' | 'gamepad' | 'gift' | 'link' | 'lock' | 'question' | 'send' | 'shield' | 'trophy' | 'user' | 'withdraw';

interface IconProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: IconTypes;
    stroke?: boolean;
    size?: number;
}



export const Icon = ({ icon, stroke, size, ...rest }: IconProps) => {
    const style = {
        fontSize: size ? size : undefined,
        width: size ? size : undefined,
        cursor: rest.onClick ? 'pointer' : undefined
    }
    return (
        <i className={clsx(styles.icon, styles[icon], stroke ? styles.stroke : styles.solid)} style={style} {...rest} />
    );
};