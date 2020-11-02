import {TweetState} from './contracts/state';
import {RootState} from '../../store';
import {Tweet} from '../tweets/contracts/state';
import {LoadingStatus} from '../../types';

export const selectTweet = (state: RootState): TweetState => state.tweet;
export const selectLoadingState = (state: RootState): LoadingStatus => selectTweet(state).loadingState;
export const selectIsTweetLoading = (state: RootState): boolean =>
    selectTweet(state).loadingState === LoadingStatus.LOADING;
export const selectIsTweetLoaded = (state: RootState): boolean =>
    selectTweet(state).loadingState === LoadingStatus.LOADED;
export const selectTweetData = (state: RootState): Tweet | undefined => selectTweet(state).data;
