import { Endpoints, ResponseStatus, Methods } from '../../../types';

type BaseLink = 'https://newsapi.org/v2/' | 'https://rss-news-api.onrender.com/';

type RequestOptions = {
    [key: string]: string;
};

interface QueryParams {
    endpoint: Endpoints.Main | Endpoints.Sources;
    options?: RequestOptions;
}

class Loader {
    constructor(private baseLink: BaseLink, private options: RequestOptions) {}

    public getResp<T>(
        { endpoint, options = {} }: QueryParams,
        callback: () => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<T>('GET', endpoint, callback, options);
    }

    static errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ResponseStatus.UNAUTHORIZED || res.status === ResponseStatus.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: RequestOptions, endpoint: Endpoints.Main | Endpoints.Sources): string {
        const urlOptions: RequestOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(
        method: Methods,
        endpoint: Endpoints.Main | Endpoints.Sources,
        callback: (data: T) => void,
        options: { [key: string]: string } = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(Loader.errorHandler)
            .then((res: Response): Promise<T> => res.json())
            .then((data: T): void => callback(data))
            .catch((err: string): void => console.error(err));
    }
}

export default Loader;
