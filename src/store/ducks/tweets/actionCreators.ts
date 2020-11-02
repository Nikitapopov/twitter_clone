import {AddFormState, Tweet, TweetsState} from './contracts/state';
import {Action} from 'redux';
import {
    AddTweetActionInterface,
    FetchAddTweetActionInterface, FetchTweetsActionInterface, setAddFormStateActionInterface,
    SetTweetsActionInterface, setTweetsLoadingStateActionInterface,
    TweetsActionsType
} from './contracts/actionTypes';
import {LoadingStatus} from '../../types';

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
});
export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
});
export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
});
export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS
});
export const setTweetsLoadingState = (payload: LoadingStatus): setTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
});
export const setAddFormState = (payload: AddFormState): setAddFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload
});

export type TweetsActions =
    SetTweetsActionInterface
    | AddTweetActionInterface
    | FetchAddTweetActionInterface
    | setTweetsLoadingStateActionInterface
    | setAddFormStateActionInterface
    | FetchTweetsActionInterface;