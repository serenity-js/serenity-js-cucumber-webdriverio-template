import { By, PageElement } from '@serenity-js/web';

export const Article = {
    title: () =>
        PageElement.located(By.css('h2')).describedAs('article title'),
}
