import AppController from '../controller/controller';
import { AppView } from '../view/appView';

import './app.css';

import githubIcon from '../../assets/images/github-mark-white.png';
import rsSchoolIcon from '../../assets/images/rs_school_js.svg';

class App {
    private controller: AppController;

    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement: HTMLElement | null = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e) =>
                this.controller.getNews(e, (data) => data && this.view.drawNews(data))
            );
        }
        this.view.renderFilterButtons();
        this.controller.getSources((data) => {
            if (data) {
                this.view.setSourceData(data);
                this.view.drawSources();
            }
        });
        this.addFooterInfo();
    }

    addFooterInfo(): void {
        const footerContainer: HTMLElement | null = document.querySelector('footer');
        const gitHubLink: HTMLAnchorElement = document.createElement('a');
        gitHubLink.classList.add('footer__github-link');
        gitHubLink.setAttribute('href', 'https://github.com/deep-logic2000');
        gitHubLink.setAttribute('target', '_blank');

        const gitHubIcon: HTMLImageElement = document.createElement('img');
        gitHubIcon.classList.add('gitHub__image');
        gitHubIcon.setAttribute('src', githubIcon);
        gitHubIcon.setAttribute('alt', 'github');

        gitHubLink.append(gitHubIcon);

        const rsCourseLink: HTMLAnchorElement = document.createElement('a');
        rsCourseLink.classList.add('footer__rs-link');
        rsCourseLink.setAttribute('href', 'https://rs.school/js/');
        rsCourseLink.setAttribute('target', '_blank');

        const rsCourseIcon: HTMLImageElement = document.createElement('img');
        rsCourseIcon.classList.add('rsSchool__image');
        rsCourseIcon.setAttribute('src', rsSchoolIcon);
        rsCourseIcon.setAttribute('alt', 'rsSchool');

        rsCourseLink.append(rsCourseIcon);

        if (footerContainer) {
            footerContainer.prepend(gitHubLink);
            footerContainer.append(rsCourseLink);
        }
    }
}

export default App;
