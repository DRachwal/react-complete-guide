import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';

import styles from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onHideModal} />
}

const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onHideModal}>Close</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onHideModal={props.onHideModal} />, 
                document.getElementById('backdrop-root')
            )}
            
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title} 
                    message={props.message} 
                    onHideModal={props.onHideModal} />, 
                    document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}

export default ErrorModal;