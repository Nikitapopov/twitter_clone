import React, {useRef} from 'react';
import {Button, FormControl, FormGroup, TextField} from '@material-ui/core';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Notification from '../../../components/Notification';

import {useStylesSignIn} from '../index';
import ModalBlock from '../../../components/ModalBlock';
import {Controller, useForm} from 'react-hook-form';
import {Color} from '@material-ui/lab';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSignIn} from '../../../store/ducks/user/actionCreators';
import {selectUserStatus} from '../../../store/ducks/user/selectors';
import {LoadingStatus} from '../../../store/types';

interface LoginModalProps {
    open: boolean
    onClose: () => void
}

export interface LoginFormProps {
    email: string,
    password: string,
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6).required('Минимальная длина пароля 6 символов'),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose}): React.ReactElement => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const openNotification = useRef<(text: string, type: Color) => void>(() => {})
    const loadingStatus = useSelector(selectUserStatus);

    const {control, handleSubmit, errors} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit = async (data: LoginFormProps) => {
        dispatch(fetchSignIn(data));
    };

    React.useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotification.current('Авторизация успешна', 'success');
            onClose();
        } else {
            openNotification.current('Неверный логин или пароль', 'error');
        }
    }, [loadingStatus])

    return (
        <Notification>
            {
                callback => {
                    openNotification.current = callback;
                    return (
                        <ModalBlock title='Войти в твиттер'
                                    visible={open}
                                    onClose={onClose}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl className={classes.loginFormControl}
                                             component='fieldset'
                                             fullWidth>
                                    <FormGroup aria-label='position' row>
                                        <Controller as={TextField}
                                                    control={control}
                                                    name='email'
                                                    className={classes.loginSideField}
                                                    id='email'
                                                    label='E-mail'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant='filled'
                                                    type='email'
                                                    defaultValue=''
                                                    helperText={errors.email?.message}
                                                    error={!!errors.email}
                                                    autoFocus
                                                    fullWidth
                                        />
                                        <Controller as={TextField}
                                                    control={control}
                                                    name='password'
                                                    className={classes.loginSideField}
                                                    id='password'
                                                    label='Пароль'
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant='filled'
                                                    type='password'
                                                    defaultValue=''
                                                    helperText={errors.password?.message}
                                                    error={!!errors.password}
                                                    fullWidth
                                        />
                                        <Button type='submit'
                                                variant='contained'
                                                color='primary'
                                                fullWidth>
                                            Войти
                                        </Button>
                                        <br/>
                                    </FormGroup>
                                </FormControl>
                            </form>
                        </ModalBlock>
                    )
                }
            }
        </Notification>
    );
};

export default LoginModal;