import {AddFormState, TweetsState} from './contracts/state';
import {RootState} from '../../store';
import {createSelector} from 'reselect';
import {LoadingStatus} from '../../types';

export const selectTweetsState = (state: RootState): TweetsState => state.tweets;

export const selectLoadingState = (state: RootState): LoadingStatus => selectTweetsState(state).loadingState;
export const selectAddFormState = (state: RootState): AddFormState => selectTweetsState(state).addFormState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
    selectTweetsState(state).loadingState === LoadingStatus.LOADING;
export const selectIsTweetsLoaded = (state: RootState): boolean =>
    selectTweetsState(state).loadingState === LoadingStatus.LOADED;

export const selectTweetsItems = (state: RootState) =>
    selectTweetsState(state).items;
