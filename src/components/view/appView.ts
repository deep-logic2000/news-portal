import './appView.css';
import News from './news/news';
import Sources from './sources/sources';

import { ArticlesData, ArticleData, SourceData, DataSourcesResp, FilterButtonsType } from '../../../types';

const filterButtons: FilterButtonsType[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];
export class AppView {
    private news: News = new News();

    private sources: Sources = new Sources();

    private activeSource: string;

    private data: SourceData[] | null;

    constructor() {
        this.activeSource = 'A';
        this.data = null;
    }

    public renderFilterButtons(): void {
        filterButtons.forEach((item: FilterButtonsType): void => {
            const btnWrapper = document.createElement('div');
            btnWrapper.classList.add('filter__btn-wrapper');
            btnWrapper.innerHTML = `<button class="filter__btn" data-filter="${item}">${item}</button>`;
            const filterContainer: HTMLDivElement | null = document.querySelector('.filter-buttons-wrapper');
            if (filterContainer) {
                filterContainer.append(btnWrapper);
            }
        });
        this.addListners();
    }

    addListners(): void {
        const filterContainer: HTMLDivElement | null = document.querySelector('.filter-buttons-wrapper');
        if (filterContainer) {
            filterContainer.addEventListener('click', (e) => this.handleChangeActiveSource(e));
        }
    }

    handleChangeActiveSource(e: MouseEvent | null): void {
        if (!e) return;

        const target = e.target as HTMLButtonElement;

        if (target) {
            const activeSource = target.getAttribute('data-filter');
            if (activeSource) {
                this.setActiveSource(activeSource);
                this.drawSources();
            }
        }
    }

    public setActiveSource(source: string): void {
        this.activeSource = source;
    }

    public setSourceData(data: DataSourcesResp): void {
        this.data = data.sources;
    }

    public drawNews(data: ArticlesData): void {
        const values: ArticleData[] | [] = data && data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(): void {
        const values: SourceData[] | [] = this.data ? this.data : [];
        this.sources.draw(values.filter((item: SourceData) => item.name[0] === this.activeSource.toUpperCase()));
    }
}

export default AppView;
