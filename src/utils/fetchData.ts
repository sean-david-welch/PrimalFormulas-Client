import { FetchDataOptions } from '../types/FetchTypes';
import { API_BASE_URL } from './config';
import axios from 'axios';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const fetchData = async (options: FetchDataOptions) => {
    axios.interceptors.request.use(request => {
        if (request.url && !request.url.startsWith('https://')) {
            request.url = request.url.replace('http://', 'https://');
        }
        return request;
    });

    const { endpoint, method, data } = options;

    try {
        const response = await axios({
            method: method,
            url: endpoint,
            data: data,
        });

        if (response.status < 200 || response.status >= 300) {
            const errorData = response;
            throw new Error(errorData.statusText || 'Error fetching data');
        }

        const responseData = response.data;

        return responseData;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw error;
        }
    }
};

export default fetchData;
