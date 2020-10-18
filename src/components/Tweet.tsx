import React from 'react';
import {Avatar, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';

import cn from 'classnames';
import {useHomeStyles} from '../pages/Home/theme';
import {Link} from 'react-router-dom';

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>,
    _id: string,
    user: {
        fullname: string,
        username: string,
        avatarUrl: string,
    },
    text: string,
}

const Tweet: React.FC<TweetProps> = ({classes, _id, user, text}): React.ReactElement => {
    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
            <Paper className={cn(classes.tweetsHeader, classes.tweet)} variant='outlined'>
                <Avatar className={classes.tweetAvatar} src={user.avatarUrl}/>
                <div>
                    <Typography>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetUserName}>@{user.username}&nbsp;·&nbsp;1ч</span>
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
        </Link>
    );
};

export default Tweet;