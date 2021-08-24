import { by, Target } from '@serenity-js/webdriverio';

export const Article = {
    title: () =>
        Target.the('article title').located(by.css('h2')),
}
