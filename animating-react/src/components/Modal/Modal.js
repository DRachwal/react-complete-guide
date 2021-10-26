import React, { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const Modal = ({ show, hideModalHandler }) => {
    const modalClassName = `Modal ${show ? 'ModalShow' : 'ModalHide'}`;

    return (
        <Fragment>
            <div className={modalClassName}>
                <h1>A Modal</h1>
                <button className='Button' onClick={hideModalHandler}>Dismiss</button>
            </div>
            <Backdrop
                show={show}
                hidaModalHandler={hideModalHandler} />
        </Fragment>
    )
};

export default Modal;