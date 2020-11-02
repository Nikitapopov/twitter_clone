import React, {useState} from 'react';
import {
    Button, DialogTitle, FormControl, FormGroup,
    makeStyles, TextField, Typography
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import ModalBlock from '../../components/ModalBlock';
import LoginModal from './components/LoginModal';
import RegisterModel from './components/RegisterModal';

export const useStylesSignIn = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    loginSideField: {
        marginBottom: 18
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(3),
    }
}));

export const Authorize: React.FC = (): React.ReactElement => {
    const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();
    const classes = useStylesSignIn();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='primary' className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><SearchIcon
                        className={classes.blueSideListInfoIcon}/>Читайте о том, что вам интересно.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><PeopleOutlineIcon
                        className={classes.blueSideListInfoIcon}/>Узнайте, о чем говорят в мире.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><MessageIcon
                        className={classes.blueSideListInfoIcon}/>Присоединяйтесь к общению.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon}/>
                    <Typography className={classes.loginSideTitle} gutterBottom variant='h4'>
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignIn} style={{marginBottom: 20}} variant='contained' color='primary'
                            fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignUp} variant='outlined' color='primary' fullWidth>
                        Войти
                    </Button>
                    <LoginModal open={visibleModal === 'signUp'}
                                onClose={handleCloseModal}
                    />
                    <RegisterModel open={visibleModal === 'signIn'}
                                onClose={handleCloseModal}
                    />

                </div>
            </section>
        </div>
    );
};

export default Authorize;