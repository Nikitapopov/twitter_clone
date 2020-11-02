import React, {useEffect} from 'react';
import {useHomeStyles} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsTweetLoaded, selectIsTweetLoading, selectTweetData} from '../../../store/ducks/tweet/selectors';
import {useParams} from 'react-router-dom';
import {fetchTweetData, setTweet} from '../../../store/ducks/tweet/actionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';
import cn from 'classnames';
import {Avatar, Paper, Typography} from '@material-ui/core';
import {formatDate} from '../../../utils/formatDate';
import {format} from 'date-fns';
import ruLang from 'date-fns/locale/ru';

const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoaded = useSelector(selectIsTweetLoaded);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: { id?: string } = useParams();
    const id = params.id;

    useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }

        return () => {
            dispatch(setTweet(undefined));
        }
    }, [dispatch, id]);

    if (!tweetData) {
        return null;
    }

    return (
        <>
            {isLoading
                ? (<div className={classes.tweetsCentred}><CircularProgress/></div>)
                : !isLoaded
                    ? (<div></div>)
                    : (<div>
                        <Paper className={classes.fullTweet}>
                            <div className={cn(classes.tweetsHeaderUser)} >
                                <Avatar className={classes.tweetAvatar} src={tweetData.user.avatarUrl}/>
                                <Typography>
                                    <b>{tweetData.user.fullname}</b>
                                    <span className={classes.tweetUserName}>@{tweetData.user.username}&nbsp;</span>
                                    <span>·&nbsp;{formatDate(new Date(tweetData.createdAt))}</span>
                                </Typography>
                            </div>
                            <Typography className={classes.fullTweetText} variant='body1' gutterBottom>
                                {tweetData.text}
                            </Typography>
                            <Typography>
                                <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'H:mm', {locale: ruLang})} </span>
                                <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', {locale: ruLang})}</span>
                            </Typography>
                            {/*<Typography className={cn(classes.tweetFooter, classes.fullTweetFooter)}>*/}
                            {/*    {tweetData.text}*/}
                            {/*</Typography>*/}
                        </Paper>
                    </div>)
            }
        </>
    );
};

export default FullTweet;