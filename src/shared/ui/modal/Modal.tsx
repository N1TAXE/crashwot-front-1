import styles from './styles.module.scss'
import React, {useEffect} from 'react';
import {Icon} from "../icon";
import {ModalPortal} from "../portal";
import {useModalStore} from "../../../app/stores";
export const Modal = () => {
    const { modal, closeModal } = useModalStore();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [closeModal]);

    if (!modal) return null;

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
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
                    {modal}
                </div>
            </div>
        </ModalPortal>
    );
};