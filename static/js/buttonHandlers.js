(function() {
    var helpers = require('./helpers');

    helpers.on('[data-gs-toggle]', 'click', function() {
        helpers.toggleState(this);
    });
})();
