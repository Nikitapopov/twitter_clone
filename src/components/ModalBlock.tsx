import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {useStylesSignIn} from '../pages/SignIn';

interface ModalBlockProps {
    title?: string
    children: React.ReactNode
    // classes: ReturnType<typeof useStylesSignIn>
    visible?: boolean
    onClose: () => void
}

const ModalBlock: React.FC<ModalBlockProps | null> = ({title, children, visible= false, onClose}) => {
    if (!visible)
        return null;
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
                <IconButton onClick={onClose}
                            color='secondary'
                            aria-label='close'
                    // className={classes.margin}
                >
                    <CloseIcon style={{ fontSize: 26}} color='primary'/>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    );
};

export default ModalBlock;