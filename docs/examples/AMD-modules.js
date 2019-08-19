// one module
define('html/utils', function() {
    /**
     * Utility functions to ease working with DOM elements.
     * @exports html/utils
     */
    var utils = {
        /**
         * Get the value of a property on an element.
         * @param {HTMLElement} element - The element.
         * @param {string} propertyName - The name of the property.
         * @return {*} The value of the property.
         */
        getStyleProperty: function(element, propertyName) { }
    };

    /**
     * Determine if an element is in the document head.
     * @param {HTMLElement} element - The element.
     * @return {boolean} Set to `true` if the element is in the document head,
     * `false` otherwise.
     */
    utils.isInHead = function(element) { }

    return utils;
    }
);

// another module
define('tag', function() {
    /** @exports tag */
    var tag = {
        /**
         * Create a new Tag.
         * @class
         * @param {string} tagName - The name of the tag.
         */
        Tag: function(tagName) {
            // ...
        }
    };

    return tag;
});