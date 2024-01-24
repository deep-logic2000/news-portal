import AppLoader from './appLoader';

import { DataSourcesResp, ArticlesData, Endpoints } from '../../../types';

type SourcesCallback = (data?: Required<DataSourcesResp>) => void;
type NewsCallback = (data?: ArticlesData) => void;

class AppController extends AppLoader {
    public getSources(callback: SourcesCallback): void {
        super.getResp<DataSourcesResp>(
            {
                endpoint: Endpoints.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: NewsCallback): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (!target) return;
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                const newsSource: string | null = newsContainer.getAttribute('data-source');
                if (sourceId && newsSource !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<ArticlesData>(
                        {
                            endpoint: Endpoints.Main,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
