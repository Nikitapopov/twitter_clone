import React, {useState} from 'react';
import {Avatar, Grid, IconButton, Menu, MenuItem, Paper, Typography} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import cn from 'classnames';
import {useHomeStyles} from '../pages/Home/theme';
import {Link, useHistory} from 'react-router-dom';
import {formatDate} from '../utils/formatDate';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>,
    _id: string,
    createdAt: string,
    user: {
        fullname: string,
        username: string,
        avatarUrl: string,
    },
    text: string,
}

const Tweet: React.FC<TweetProps> = ({classes, _id, user, text, createdAt}): React.ReactElement => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const history = useHistory();

    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        history.push(`/home/tweet/${_id}`);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <a className={classes.tweetWrapper} onClick={handleClickTweet}>
            <Paper className={cn(classes.tweetsHeader, classes.tweet)} variant='outlined'>
                <Avatar className={classes.tweetAvatar} src={user.avatarUrl}/>
                <div className={classes.tweetContent}>
                    <Typography className={classes.tweetHeader}>
                        <div>
                            <b>{user.fullname}</b>
                            <span
                                className={classes.tweetUserName}>@{user.username}&nbsp;·&nbsp;{formatDate(new Date(createdAt))}</span>
                        </div>
                        <div className={classes.tweetPopupMenu}>
                            <IconButton onClick={handleClick}>
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu id="long-menu"
                                  anchorEl={anchorEl}
                                  keepMounted
                                  open={open}
                                  onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    Редактировать
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Удалить твит
                                </MenuItem>
                            </Menu>
                        </div>
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div className="">
                            <IconButton>
                                <CommentIcon style={{fontSize: 20}}/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div className="">
                            <IconButton>
                                <RepeatIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div className="">
                            <IconButton>
                                <LikeIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                        <div className="">
                            <IconButton>
                                <ReplyIcon style={{fontSize: 20}}/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
        </a>
    );
};

export default Tweet;