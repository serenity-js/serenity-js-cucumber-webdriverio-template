import { equals } from '@serenity-js/assertions';
import {  QuestionAdapter } from '@serenity-js/core';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 * In this case, The list of examples at https://the-internet.herokuapp.com/
 */
export class Examples {
    static all = () =>
        PageElements.located(By.css('ul li a')).describedAs('available examples')

    /**
     * Note how I pick an element which text matches `name` without having to use XPath
     * See: https://janmolak.com/xpath-is-dead-advanced-web-element-locators-with-serenity-js-2-25-0-66145ad248d4
     *
     * @param name
     */
    static called = (name: string): QuestionAdapter<PageElement<unknown>> =>
        Examples.all()
            .where(Text, equals(name))
            .first()
}
