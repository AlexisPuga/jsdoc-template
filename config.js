module.exports = {
    /**
     * All default options should be available.
     * @see {@link https://jsdoc.app/about-configuring-jsdoc.html#default-configuration-options}
     */
    // plugins: [], 
    // source: [],
    // ...
	templates: {
        // cleverLinks: false,
        // monospaceLinks: false,
		default: {
            includeDate: false
        },
        /** @type {!object} */
		custom: {
            /**
             * The name of your site.
             * @type {?string}
             */
            siteName: 'JSDoc',
            /** @type {!object} */
            themes: {
                /**
                 * A valid url for the prettify theme.
                 *
                 * Note: If a relative url is passed, it will use the "/static".
                 * directory of this project.
                 *
                 * @type {?string}
                 */
                prettify: 'css/tranquil-heart.min.css'
            },
            /**
             * Raw tags that will be added to the document.
             * This could be wharever you want.
             *
             * @typedef {string|string[]} tags
             *
             * @example
             * [`<meta />`, `<link href="" />`]
             *
             * @example <caption>Non-Array values will be converted to an Array.</caption>
             * `<meta />` // becomes [`<meta />`]
             */
            /** @type {!object} */
            tags: {
                /**
                 * Append tags to the head of the document.
                 * @type {!tags}
                 */
                head: [
                    `<meta name="viewport" content="width=device-width,
                        initial-scale=1"/>`
                ],
                /**
                 * Prepend tags to the page header.
                 *
                 * Note: This removes the heading of the header.
                 *
                 * @type {!tags}
                 */
                header: [],
                /**
                 * Appends tags to <body>.
                 * @type {!tags}
                 */
                body: [],
                /**
                 * Appends tags to the page footer.
                 *
                 * Note: Attribution for using this template is not required,
                 * but it's appreciated.
                 *
                 * @type {!tags}
                 */
                footer: [
                    `<small style='margin-left: 1em;'>Design by <a
                        href='https://github.com/AlexisPuga'
                        target='_blank'
                        rel="noopener noreferrer">Alexis Puga</a>.</small>`
                ]
            }
        }
	}
};
