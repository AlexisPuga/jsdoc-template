/**
 * @classdesc Toaster singleton.
 * @class
 * @hideconstructor
 */
var Toaster = (function() {
    var instance = null;

    function Toaster() {}

    /**
     * Toast an item.
     *
     * @alias toast
     * @memberof Toaster
     * @instance
     * @param {BreadyThing} item - The item to toast.
     * @return {Toast} A toasted bready thing.
     */
    Toaster.prototype.toast = function(item) {};

    return {
        /**
         * Get the Toaster instance.
         *
         * @alias Toaster.getInstance
         * @returns {Toaster} The Toaster instance.
         */
        getInstance: function() {
            if (instance === null) {
                instance = new Toaster();
                delete instance.constructor;
            }

            return instance;
        }
    };
})();