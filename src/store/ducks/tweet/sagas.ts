import {call, put, takeLatest} from 'redux-saga/effects';
import {TagsApi} from '../../../services/api/tagsApi';
import {LoadingState} from './contracts/state';
import {FetchTagsActionInterface} from '../tags/actionCreators';
import {setTweet, setTweetLoadingState} from './actionCreators';
import {FetchTweetDataActionInterface, TweetActionsType} from './contracts/actionTypes';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {Tweet} from '../tweets/contracts/state';

export function* fetchTweetDataRequest({ payload: tweetId}: FetchTweetDataActionInterface) {
    try {
        const data: Tweet[] = yield call(TweetsApi.fetchTweetsData, tweetId);
        yield put(setTweet(data[0]));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}