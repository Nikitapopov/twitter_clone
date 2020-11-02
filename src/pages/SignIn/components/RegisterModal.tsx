import React from 'react';
import {
    Button, FormControl, FormGroup,
    TextField
} from '@material-ui/core';
import {useStylesSignIn} from '../index';
import ModalBlock from '../../../components/ModalBlock';

interface RegisterModalProps {
    open: boolean
    onClose: () => void
}

export const RegisterModel: React.FC<RegisterModalProps> = ({ open, onClose }): React.ReactElement => {
    const classes = useStylesSignIn();

    return (
        <ModalBlock title='Создайте учетную запись'
                    visible={open}
                    onClose={onClose}
        >
            <FormControl className={classes.loginFormControl}
                         component='fieldset'
                         fullWidth>
                <FormGroup aria-label='position' row>
                    <TextField className={classes.loginSideField}
                               autoFocus
                               id='name'
                               label='Имя'
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               variant='filled'
                               type='name'
                               fullWidth
                    />
                    <TextField className={classes.loginSideField}
                               autoFocus
                               id='email'
                               label='E-mail'
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               variant='filled'
                               type='email'
                               fullWidth
                    />
                    <TextField className={classes.loginSideField}
                               autoFocus
                               id='password'
                               label='Пароль'
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               variant='filled'
                               type='password'
                               fullWidth
                    />
                    <Button onClick={onClose}
                            variant='contained'
                            color='primary'
                            fullWidth>
                        Далее
                    </Button>
                    <br/>
                </FormGroup>
            </FormControl>
        </ModalBlock>
    );
};

export default RegisterModel;