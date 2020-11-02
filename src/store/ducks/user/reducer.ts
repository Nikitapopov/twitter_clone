import { UserState} from './contracts/state';
import produce, {Draft} from 'immer';
import {UserActions} from './actionCreators';
import {UserActionsType} from './contracts/actionTypes';
import {LoadingStatus} from '../../types';

const initialState: UserState = {
    data: undefined,
    status: LoadingStatus.NEVER
};

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload;
            draft.status = LoadingStatus.SUCCESS;
            break;
        case UserActionsType.SET_LOADING_STATE:
            draft.status = action.payload;
            break;
    }
}, initialState)