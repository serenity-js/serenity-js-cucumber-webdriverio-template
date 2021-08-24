import { by, Target } from '@serenity-js/webdriverio';

export const LoginForm = {
    usernameField: () =>
        Target.the('username field').located(by.id('username')),

    passwordField: () =>
        Target.the('password field').located(by.id('password')),

    loginButton: () =>
        Target.the('login button').located(by.css('button[type="submit"]')),
}
