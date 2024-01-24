import './news.css';
import { ArticleData } from '../../../../types';
import news_placeholder from '../../../assets/images/news_placeholder.jpg';

class News {
    public draw(data: ArticleData[] | []): void {
        const news: ArticleData[] =
            data.length >= 10 ? data.filter((_item: ArticleData, idx: number): boolean => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            return;
        }

        news.forEach((item: ArticleData, idx: number): void => {
            const newsClone: Node = newsItemTemp.content.cloneNode(true);
            if (!newsClone) return;

            if (newsClone instanceof DocumentFragment) {
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const metaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                if (!metaPhoto) return;
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || news_placeholder})`;

                const metaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                if (!metaAuthor) return;
                metaAuthor.textContent = item.author || item.source.name;

                const metaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                if (!metaDate) return;
                metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

                const descriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                if (!descriptionTitle) return;
                descriptionTitle.textContent = item.title;

                const descriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                if (!descriptionSource) return;
                descriptionSource.textContent = item.source.name;

                const descriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
                if (!descriptionContent) return;
                descriptionContent.textContent = item.description;

                const readMoreAnchor: HTMLElement | null = newsClone.querySelector('.news__read-more a');
                if (!readMoreAnchor) return;
                readMoreAnchor.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });

        const newsWrapper = document.querySelector('.news');
        if (!newsWrapper) return;

        newsWrapper.innerHTML = '';
        newsWrapper.appendChild(fragment);
    }
}

export default News;
