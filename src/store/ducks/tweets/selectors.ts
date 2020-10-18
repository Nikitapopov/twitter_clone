import {LoadingState, TweetsState} from './contracts/state';
import {RootState} from '../../store';
import {createSelector} from 'reselect';

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
    selectTweets(state).loadingState === LoadingState.LOADING;
export const selectIsTweetsLoaded = (state: RootState): boolean =>
    selectTweets(state).loadingState === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);
