import React from 'react';

import './Backdrop.css';

const Backdrop = ({ show, hidaModalHandler }) => {
    const backdropClassName = `Backdrop ${show ? 'BackdropShow' : 'BackdropHide'}`
    return (
        <div className={backdropClassName} onClick={hidaModalHandler}></div>
    );
}

export default Backdrop;