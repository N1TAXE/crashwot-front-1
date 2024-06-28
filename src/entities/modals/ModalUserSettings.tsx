import styles from './styles.module.scss'
import React, {Fragment} from 'react';
import {Icon} from "../../shared/ui/icon";
import {Input} from "../../shared/ui/input";
import {useColorPicker} from "../../shared/ui/colorpiker";
import {ColorTypes} from "../../shared/ui/colorpiker/ui.tsx";
import {Button} from "../../shared/ui/button";
import {useModalStore} from "../../app/stores";

const colors: ColorTypes[] = [
    {color: '#92E7A5'},
    {color: '#FFD600'},
    {color: '#CA7C35'},
    {color: '#358BCA'},
    {color: '#D62727'},
    {color: '#8FD0FF'},
    {color: '#FFA3A3'},
    {color: '#92E7A5'},
    {color: '#FFD600'},
    {color: '#CA7C35'},
    {color: '#358BCA'},
    {color: '#D62727'},
    {color: '#8FD0FF'},
    {color: '#FFA3A3'},
]

export const ModalUserSettings = () => {
    const {closeModal} = useModalStore()
    const [activeColor, ColorPickerComponent] = useColorPicker(
        {
            colors: colors,
            label: "Цвет ника",
            name: "colors"
        });
    return (
        <div className={styles.modalContentInner}>
            <div className={styles.modalHeader}>
                <Icon icon="cog"/>
                <span>Кастомизация</span>
            </div>
            <form className={styles.modalContent}>
                <Input style={{color: colors[activeColor].color}} className={styles.userSettingsInput} label="Ваш никнейм" name="nickname" disabled={true} type="test" value="nickname"/>
                {ColorPickerComponent}
                <Button color="green" size="medium" onClick={closeModal} icon="check">Сохранить</Button>
            </form>
        </div>
    );
};