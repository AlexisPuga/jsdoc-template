/** @class Observable */
create(
    'Observable',
    {
        /**
         * This will be a static member, Observable.cache.
         * @memberof Observable
         */
        cache: [],

        /**
         * This will be an instance member, Observable#publish.
         * @memberof Observable.prototype
         */
        publish: function(msg) {},

        /**
         * This will also be an instance member, Observable#save.
         * @memberof Observable#
         */
        save: function() {},

        /**
         * This will also be an instance member, Observable#end.
         * @memberof Observable
         * @instance
         */
        end: function() {}
    }
);