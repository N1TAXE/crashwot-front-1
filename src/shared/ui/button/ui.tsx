import clsx from 'clsx';
import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ElementType } from 'react';
import styles from './styles.module.scss';
import {Icon, IconTypes} from "../icon";

type ButtonColorTypes = 'blue' | 'red' | 'orange' | 'dark' | 'dark-light' | 'green' | 'green-dark' | 'dashed' | 'lecta' | 'vk' | 'wg' ;

interface ButtonProps<E extends ElementType = ElementType> extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    target?: string;
    to?: string;
    icon?: IconTypes;
    iconColor?: string;
    size?: 'small' | 'regular' | 'medium' | 'big';
    color?: ButtonColorTypes;
    social?: 'vk' | 'wg' | 'lecta';
    as?: E;
}

const DEFAULT_ELEMENT: ElementType = 'button';

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({children, as, color, size = 'medium', icon, className, ...props}, ref) => {

        const Element = as || DEFAULT_ELEMENT;

        return (
            <Element
                className={clsx(
                    styles.btn,
                    color && styles[color],
                    styles[size],
                    icon ? styles.icon : '',
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
                {icon ? <Icon icon={icon}/> : null}
            </Element>
        );
    }
);