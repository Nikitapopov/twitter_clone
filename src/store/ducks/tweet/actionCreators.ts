import {TweetState} from './contracts/state';
import {Tweet} from '../tweets/contracts/state';

import {
    FetchTweetDataActionInterface,
    SetTweetActionInterface, setTweetLoadingStateActionInterface,
    TweetActionsType
} from './contracts/actionTypes';
import {LoadingStatus} from '../../types';

export const setTweet = (payload: TweetState['data']): SetTweetActionInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload
});
export const setTweetLoadingState = (payload: LoadingStatus): setTweetLoadingStateActionInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
});
export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
});

export type TweetActions =
    SetTweetActionInterface
    | setTweetLoadingStateActionInterface
    | FetchTweetDataActionInterface;