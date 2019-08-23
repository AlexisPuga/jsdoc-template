(function () {

	var helpers = require('./helpers');
	var globalStates = helpers.getGlobalStates();
	var globalElement = helpers.getGlobalElement();

	helpers.onState('[data-gs-toggle]', 'is-active', function (e) {
		var gs = globalStates[helpers.getRawState(this, 'data-gs-toggle')];

		helpers.changeGlobalState('toggle', gs);
	});

})();