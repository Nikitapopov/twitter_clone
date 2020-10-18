import {LoadingState, TagsState} from './contracts/state';
import {RootState} from '../../store';
import {createSelector} from 'reselect';

export const selectTags = (state: RootState): TagsState => state.tags;
export const selectLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState;
export const selectIsTagsLoading = (state: RootState): boolean =>
    selectTags(state).loadingState === LoadingState.LOADING;
export const selectIsTagsLoaded = (state: RootState): boolean =>
    selectTags(state).loadingState === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
