import {User, UserState} from './contracts/state';
import {
    FetchUserDataActionInterface,
    SetUserDataActionInterface,
    SetUserLoadingStateActionInterface,
    UserActionsType
} from './contracts/actionTypes';
import {LoginFormProps} from '../../../pages/SignIn/components/LoginModal';

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload
});
export const setLoadingStatus = (payload: UserState['status']): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload
});
export const fetchSignIn = (payload: LoginFormProps): FetchUserDataActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload
});

export type UserActions =
    SetUserDataActionInterface
    | SetUserLoadingStateActionInterface