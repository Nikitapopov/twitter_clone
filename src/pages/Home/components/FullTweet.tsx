import React, {useEffect} from 'react';
import Tweet from '../../../components/Tweet';
import {useHomeStyles} from '../theme';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsTweetLoaded, selectIsTweetLoading, selectTweetData} from '../../../store/ducks/tweet/selectors';
import {useParams} from 'react-router-dom';
import {fetchTweetData, setTweet} from '../../../store/ducks/tweet/actionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';

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
                    : (<Tweet classes={classes} {...tweetData}/>)
            }
        </>
    );
};

export default FullTweet;