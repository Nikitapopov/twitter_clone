import {call, put, takeLatest} from 'redux-saga/effects';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {
    addTweet,
    FetchAddTweetActionInterface,
    setTweets,
    setTweetsLoadingState,
    TweetsActionsType
} from './actionCreators';
import {LoadingState} from './contracts/state';

export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}
export function* fetchaddTweetRequest({ payload }: FetchAddTweetActionInterface) {
    try {
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: 'test User',
                username: 'Test',
                avatarUrl: 'https://source.unsplash.com/user/erondu/100x100?8',
            }
        }
        const item = yield call(TweetsApi.addTweet, data);
        yield put(addTweet(item))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchaddTweetRequest);
}