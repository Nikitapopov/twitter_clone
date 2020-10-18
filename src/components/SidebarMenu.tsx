import React, {useState} from 'react';
import {Button, Hidden, Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/PersonOutline';
import {useHomeStyles} from '../pages/Home/theme';
import ModalBlock from './ModalBlock';
import AddTweetForm from './AddTweetForm';
import {Link} from 'react-router-dom';


interface SidebarMenuProps {
    classes: ReturnType<typeof useHomeStyles>,
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({classes}) => {
    const [visibleAddTweet, setVisibleAddTweet] = useState(false);

    const onClickAddTweet = () => {
        setVisibleAddTweet(true);
    }
    const onCloseAddTweet = () => {
        setVisibleAddTweet(false);
    }

    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <Link to='/home'>
                    <div>
                        <TwitterIcon className={classes.logoIcon} color='primary'/>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel}
                                    variant={'h6'}>Уведомления</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PersonIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>Профиль</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button onClick={onClickAddTweet}
                        className={classes.sideMenuTweetButton}
                        fullWidth
                        color='primary'
                        variant='contained'>
                    Твитнуть
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet} title=''>
                    <div style={{width: 550}}>
                        <AddTweetForm maxRows={15} classes={classes}/>
                    </div>
                </ModalBlock>
            </li>
        </ul>

    );
};

export default SidebarMenu;