import {call, put, takeLatest} from 'redux-saga/effects';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {addTweet, setAddFormState, setTweets, setTweetsLoadingState,} from './actionCreators';
import {AddFormState} from './contracts/state';
import {FetchAddTweetActionInterface, TweetsActionsType} from './contracts/actionTypes';
import {LoadingStatus} from '../../types';

export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingStatus.ERROR));
    }
}
export function* fetchAddTweetRequest({ payload: text }: FetchAddTweetActionInterface) {
    try {
        const item = yield call(TweetsApi.addTweet, text);
        yield put(addTweet(item))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}