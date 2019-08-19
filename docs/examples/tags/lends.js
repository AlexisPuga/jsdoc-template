/** @class */
var Person = makeClass(
    /** @lends Person */
    {
        /**
         * Create a `Person` instance.
         * @param {string} name - The person's name.
         */
        initialize: function(name) {
            this.name = name;
        },
        /**
         * Say something.
         * @param {string} message - The message to say.
         * @returns {string} The complete message.
         */
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);