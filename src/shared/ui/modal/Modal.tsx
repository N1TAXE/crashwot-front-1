import styles from './styles.module.scss'
import React, {useEffect} from 'react';
import {Icon} from "../icon";
import {useModalStore} from "../../../app/stores/gobalStore.tsx";
import {ModalPortal} from "../portal";

export const Modal = () => {
    const { modal, component, closeModal } = useModalStore();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [closeModal]);

    if (!modal) return null;

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.target)
        if ((e.target as HTMLDivElement).className === styles.modal) {
            closeModal();
        }
    };

    return (
        <ModalPortal>
            <div className={styles.modal} onClick={handleClickOutside}>
                <div className={styles.modalContent}>
                    <button onClick={closeModal} className={styles.closeBtn}>
                        <Icon icon="cross"/>
                    </button>
                    {component}
                </div>
            </div>
        </ModalPortal>
    );
};