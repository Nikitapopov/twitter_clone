import {Tweet} from '../../store/ducks/tweets/contracts/state';
import {axios} from '../../core/axios';

interface Response<T> {
    status: string,
    data: T
}

export const TweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const {data} = await axios.get<Response<Tweet[]>>('/tweets');
        return data.data;
    },
    async fetchTweetsData(id: string): Promise<Tweet> {
        const {data} = await axios.get<Response<Tweet>>('/tweets/' + id);
        return data.data;
    },
    async addTweet(payload: string): Promise<Tweet> {
        const {data} = await axios.post<Response<Tweet>>('/tweets', {text: payload});
        return data.data;
    }
};