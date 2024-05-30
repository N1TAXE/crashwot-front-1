import clsx from 'clsx';
import styles from './styles.module.scss';

export type IconTypes = 'star' | 'pointer' | 'logout' | 'minus' | 'plus' | 'case' | 'crashgame' | 'lc' | 'vk' | 'wg' | 'add' | 'arrow' | 'arrows' | 'bag' | 'chat' | 'check' | 'clock' | 'cog' | 'coins' | 'copy' | 'cross' | 'gamepad' | 'gift' | 'link' | 'lock' | 'question' | 'send' | 'shield' | 'trophy' | 'user' | 'withdraw';

type IconProps = {
    icon: IconTypes;
    stroke?: boolean;
    size?: number;
}



export const Icon = ({ icon, stroke, size }: IconProps) => {
    const style = {
        fontSize: size ? size : null,
        width: size ? size : null
    }
    return (
        <i className={clsx(styles.icon, styles[icon], stroke ? styles.stroke : styles.solid)} style={style} />
    );
};