import './sources.css';
import { SourceData } from '../../../../types';
import News from '../news/news';

class Sources {
    public draw(data: SourceData[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (!sourceItemTemp) {
            return;
        }

        data.forEach((item: SourceData): void => {
            const sourceClone: Node = sourceItemTemp.content.cloneNode(true);

            if (sourceClone instanceof DocumentFragment) {
                const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                }
                const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
                if (sourceItem) {
                    sourceItem.setAttribute('data-source-id', item.id.toString());
                }
                fragment.append(sourceClone);
            }
        });

        const sourcesContainer: HTMLDivElement | null = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = '';
            if (fragment.hasChildNodes()) {
                sourcesContainer.append(fragment);
            } else {
                sourcesContainer.innerText = 'No news channels to show on this letter';
                const news = new News();
                news.draw([]);
            }
        }
    }
}

export default Sources;
