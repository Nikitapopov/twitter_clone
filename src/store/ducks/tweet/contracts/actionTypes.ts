import {Action} from 'redux';
import {Tweet} from '../../tweets/contracts/state';
import {LoadingState, TweetState} from './state';

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}
export interface SetTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET_DATA;
    payload: TweetState['data'];
}
export interface setTweetLoadingStateActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}
export interface FetchTweetDataActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET_DATA;
    payload: string;
}
