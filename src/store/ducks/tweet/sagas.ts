import {call, put, takeLatest} from 'redux-saga/effects';
import {TagsApi} from '../../../services/api/tagsApi';
import {FetchTagsActionInterface} from '../tags/actionCreators';
import {setTweet, setTweetLoadingState} from './actionCreators';
import {FetchTweetDataActionInterface, TweetActionsType} from './contracts/actionTypes';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {Tweet} from '../tweets/contracts/state';
import {LoadingStatus} from '../../types';

export function* fetchTweetDataRequest({ payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchTweetsData, tweetId);
        yield put(setTweet(data));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingStatus.ERROR));
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}