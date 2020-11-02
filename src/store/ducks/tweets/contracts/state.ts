import {LoadingStatus} from '../../../types';

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
    _id: string,
    createdAt: string,
    user: {
        fullname: string,
        username: string,
        avatarUrl: string,
    },
    text: string,
}

export interface TweetsState {
    items: Tweet[];
    loadingState: LoadingStatus;
    addFormState: AddFormState;
}