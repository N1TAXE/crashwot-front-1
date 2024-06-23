import styles from './styles.module.scss'
import React, {Fragment} from 'react';
import {Icon} from "../../shared/ui/icon";
import {Input} from "../../shared/ui/input";
import {ColorPicker} from "../../shared/ui/colorpiker";
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

const ModalUserSettings = () => {
    const {closeModal} = useModalStore()
    return (
        <Fragment>
            <div className={styles.modalHeader}>
                <Icon icon="cog"/>
                <span>Кастомизация</span>
            </div>
            <form className={styles.modalContent}>
                <Input className={styles.userSettingsInput} label="Ваш никнейм" name="nickname" disabled={true} type="test" value="nickname"/>
                <ColorPicker colors={colors} name="colors" label="Цвет ника"/>
                <Button color="green" size="medium" onClick={closeModal} icon="check">Сохранить</Button>
            </form>
        </Fragment>
    );
};

export default ModalUserSettings;