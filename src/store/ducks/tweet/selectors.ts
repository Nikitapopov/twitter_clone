import {LoadingState, TweetState} from './contracts/state';
import {RootState} from '../../store';
import {createSelector} from 'reselect';

export const selectTweet = (state: RootState): TweetState => state.tweet;
export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState;
export const selectIsTweetLoading = (state: RootState): boolean =>
    selectTweet(state).loadingState === LoadingState.LOADING;
export const selectIsTweetLoaded = (state: RootState): boolean =>
    selectTweet(state).loadingState === LoadingState.LOADED;
export const selectTweetData = (state: RootState): TweetState['data'] => selectTweet(state).data;
