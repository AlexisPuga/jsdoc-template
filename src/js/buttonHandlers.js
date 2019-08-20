(function () {

	var helpers = require('./helpers');

	helpers.on('[data-gs-toggle]', 'click', function (e) {
		helpers.toggleState(this);
	});

})();
