import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '288a6b3ab5ca44f59530675750cf06a3', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
