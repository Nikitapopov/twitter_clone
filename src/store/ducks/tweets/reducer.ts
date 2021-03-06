import {AddFormState, TweetsState} from './contracts/state';
import produce, {Draft} from 'immer';
import {TweetsActions} from './actionCreators';
import {TweetsActionsType} from './contracts/actionTypes';
import {LoadingStatus} from '../../types';

const initialState: TweetsState = {
    items: [],
    addFormState: AddFormState.NEVER,
    loadingState: LoadingStatus.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingStatus.LOADED;
            break;
        case TweetsActionsType.ADD_TWEET:
            // draft.items.push(action.payload);
            draft.items.splice(0, 0, action.payload);
            draft.addFormState = AddFormState.NEVER;
            break;
        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addFormState = AddFormState.LOADING;
            break;
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingStatus.LOADING;
            break;
        case TweetsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;
        case TweetsActionsType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload;
            break;

    }
}, initialState)