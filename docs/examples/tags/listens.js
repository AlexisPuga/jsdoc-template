define('hurler', [], function () {
    /**
     * Event reporting that a snowball has been hurled.
     *
     * @event module:hurler~snowball
     * @property {number} velocity - The snowball's velocity, in meters per second.
     */

    /**
     * Snowball-hurling module.
     *
     * @module hurler
     */
    var exported = {
        /**
         * Attack an innocent (or guilty) person with a snowball.
         *
         * @method
         * @fires module:hurler~snowball
         */
        attack: function () {
            this.emit('snowball', { velocity: 10 });
        }
    };

    return exported;
});

define('playground/monitor', [], function () {
    /**
     * Keeps an eye out for snowball-throwers.
     *
     * @module playground/monitor
     */
    var exported = {
        /**
         * Report the throwing of a snowball.
         *
         * @method
         * @param {module:hurler~event:snowball} e - A snowball event.
         * @listens module:hurler~event:snowball
         */
        reportThrowage: function (e) {
            this.log('snowball thrown: velocity ' + e.velocity);
        }
    };

    return exported;
});