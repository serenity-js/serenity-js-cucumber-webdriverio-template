import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { Examples } from './ui/Examples';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const PickExample = {
    called: (name: string) =>
        Task.where(`#actor picks example called ${ name }`,
            Click.on(Examples.called(name)),
        ),
}
