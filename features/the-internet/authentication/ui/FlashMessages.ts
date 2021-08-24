import { by, Target } from '@serenity-js/webdriverio';

export const FlashMessages = {
    flashAlert: () =>
        Target.the('flash message').located(by.id('flash')),
}
