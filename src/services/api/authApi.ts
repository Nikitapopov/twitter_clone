import {LoginFormProps} from '../../pages/SignIn/components/LoginModal';
import {axios} from '../../core/axios';

interface ResponseApi {
    status: string,
    data: any,
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<ResponseApi> {
        const {data} = await axios.post<ResponseApi>('/auth/login', {username: postData.email, password: postData.password});
        return data;
    },
    async getMe(): Promise<ResponseApi> {
        const {data} = await axios.get<ResponseApi>('/users/me');
        return data;
    },
}