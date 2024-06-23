import ReactDOM from 'react-dom';
import {ReactNode} from "react";

const modalRoot = document.getElementById('modal');

export const ModalPortal = ({ children } : {children: ReactNode}) => {
    if (!modalRoot) {
        throw new Error("The element with id 'modal-root' was not found.");
    }
    return ReactDOM.createPortal(children, modalRoot);
};