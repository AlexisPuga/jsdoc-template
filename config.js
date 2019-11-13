/**
 * @file Manages the default configurations for the template.
 */
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
        /**
         * Options for this template.
         * @type {!object}
         */
        custom: {
            /**
             * The name of your site.
             * @type {?string}
             */
            siteName: 'JSDoc',
            /**
             * The url to your site.
             *
             * Note: If an empty string is given,
             * the page heading won't be a link.
             *
             * @type {?string}
             */
            siteURL: '/',
            /** @type {!object} */
            themes: {
                /**
                 * A valid url for the prettify theme.
                 *
                 * Note: If a relative url is passed, you should add static files to
                 * "templates.default.staticFiles". Please, check
                 * {@link https://jsdoc.app/about-configuring-default-template.html#copying-static-files-to-the-output-directory}
                 * for details.
                 *
                 * Note 2: If you pass an empty string, the prettify script
                 * won't be loaded.
                 *
                 * @type {?string}
                 */
                prettify: 'css/tomorrow.min.css'
            },
            /**
             * Raw tags that will be added to the document.
             * Any <tag> is allowed.
             *
             * @typedef {string|string[]} tags
             *
             * @example
             * [`<meta />`, `<link href="" />`]
             *
             * @example <caption>Non-Array values will be converted to an Array.</caption>
             * `<meta />` // becomes [`<meta />`]
             */
            /**
             * Custom tags added after `defaultTags`.
             * @type {!object}
             */
            tags: {
                /**
                 * Append tags to the head of the document.
                 * @type {!tags}
                 */
                head: [],
                /**
                 * Prepend tags to the page header.
                 *
                 * Note: If one or more <tags> are provided, the heading that includes
                 * your site name will be removed.
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
                 * @type {!tags}
                 */
                footer: []
            },
            /**
             * Default but optional tags added before `tags`.
             * @type {!object}
             */
            defaultTags: {
                /** @type {!tags} */
                head: [
                    `<meta name="viewport" content="width=device-width,
                        initial-scale=1"/>`
                ],
                /** @type {!tags} */
                header: [],
                /** @type {!tags} */
                body: [],
                /**
                 * Note: Attribution for using this template is not required,
                 * but it's appreciated.
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
