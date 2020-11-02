import {call, put, takeLatest} from 'redux-saga/effects';
import {TweetsApi} from '../../../services/api/tweetsApi';
import {FetchUserDataActionInterface, UserActionsType} from './contracts/actionTypes';
import {AuthApi} from '../../../services/api/authApi';
import {setLoadingStatus, setUserData} from './actionCreators';
import {LoadingStatus} from '../../types';

export function* fetchSignInRequest({payload}: FetchUserDataActionInterface) {
    try {
        const {data} = yield call(AuthApi.signIn, payload);
        window.localStorage.setItem('token', data.token);
        yield put(setUserData(data));
    } catch (error) {
        yield put(setLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}