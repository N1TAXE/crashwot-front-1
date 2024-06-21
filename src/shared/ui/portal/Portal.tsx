import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

export const ModalPortal = ({ children } : {children: any}) => {
    if (!modalRoot) {
        throw new Error("The element with id 'modal-root' was not found.");
    }
    return ReactDOM.createPortal(children, modalRoot);
};