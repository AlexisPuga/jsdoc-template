(function() {
    var helpers = require('./helpers');
    var globalStates = helpers.getGlobalStates();

    helpers.onState('[data-gs-toggle]', 'is-active', function() {
        var gs = globalStates[helpers.getRawState(this, 'data-gs-toggle')];

        helpers.changeGlobalState('toggle', gs);
    });
})();
