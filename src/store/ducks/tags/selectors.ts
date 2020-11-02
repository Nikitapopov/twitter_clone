import {TagsState} from './contracts/state';
import {RootState} from '../../store';
import {createSelector} from 'reselect';
import {LoadingStatus} from '../../types';

export const selectTags = (state: RootState): TagsState => state.tags;
export const selectLoadingState = (state: RootState): LoadingStatus => selectTags(state).loadingState;
export const selectIsTagsLoading = (state: RootState): boolean =>
    selectTags(state).loadingState === LoadingStatus.LOADING;
export const selectIsTagsLoaded = (state: RootState): boolean =>
    selectTags(state).loadingState === LoadingStatus.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
