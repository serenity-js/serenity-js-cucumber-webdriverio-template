import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { isVisible, Text } from '@serenity-js/web';

import { FlashMessages } from './ui/FlashMessages';

export class VerifyAuthentication {
    private static hasFlashAlert = () =>
        Task.where(`#actor verifies that flash alert is present`,
            Ensure.that(FlashMessages.flashAlert(), isVisible()),
        )

    static succeeded = () =>
        Task.where(`#actor verifies that authentication has succeeded`,
            VerifyAuthentication.hasFlashAlert(),
            Ensure.that(Text.of(FlashMessages.flashAlert()), includes('You logged into a secure area!')),
        )

    static failed = () =>
        Task.where(`#actor verifies that authentication has failed`,
            VerifyAuthentication.hasFlashAlert(),
            Ensure.that(Text.of(FlashMessages.flashAlert()), includes('Your username is invalid!')),
        )
}
