// Documenting objectA with @alias

var objectA = (function() {

    /**
     * Documented as objectA
     * @alias objectA
     * @namespace
     */
    var x = {
        /**
         * Documented as objectA.myProperty
         * @member
         */
        myProperty: 'foo'
    };

    return x;
})();

// Documenting objectB with @lends

/**
 * Documented as objectB
 * @namespace
 */
var objectB = (function() {

    /** @lends objectB */
    var x = {
        /**
         * Documented as objectB.myProperty
         * @member
         */
        myProperty: 'bar'
    };

    return x;
})();