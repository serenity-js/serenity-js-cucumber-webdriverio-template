import { By, PageElement } from '@serenity-js/web';

export const FlashMessages = {
    flashAlert: () =>
        PageElement.located(By.id('flash')).describedAs('flash message'),
}
