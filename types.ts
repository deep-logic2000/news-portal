export type SourceData = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
    language: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
    country:
        | 'ae'
        | 'ar'
        | 'at'
        | 'au'
        | 'be'
        | 'bg'
        | 'br'
        | 'ca'
        | 'ch'
        | 'cn'
        | 'co'
        | 'cu'
        | 'cz'
        | 'de'
        | 'eg'
        | 'fr'
        | 'gb'
        | 'gr'
        | 'hk'
        | 'hu'
        | 'id'
        | 'ie'
        | 'il'
        | 'in'
        | 'it'
        | 'jp'
        | 'kr'
        | 'lt'
        | 'lv'
        | 'ma'
        | 'mx'
        | 'my'
        | 'ng'
        | 'nl'
        | 'no'
        | 'nz'
        | 'ph'
        | 'pl'
        | 'pt'
        | 'ro'
        | 'rs'
        | 'ru'
        | 'sa'
        | 'se'
        | 'sg'
        | 'si'
        | 'sk'
        | 'th'
        | 'tr'
        | 'tw'
        | 'ua'
        | 'us'
        | 've'
        | 'za';
};

export interface DataSourcesResp {
    status: 'ok' | 'error';
    sources: SourceData[];
}

type SourceName = {
    id: string;
    name: string;
    age: number;
};

export type ArticleData = {
    source: Pick<SourceName, 'id' | 'name'>;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type ArticlesData = {
    status: 'ok' | 'error';
    totalResults: number;
    articles: ArticleData[];
};

export enum Endpoints {
    Main = 'everything',
    Sources = 'sources',
}

export enum ResponseStatus {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type FilterButtonsType =
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z';
