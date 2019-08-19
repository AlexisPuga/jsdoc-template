(function () {

	var helpers = require('./helpers');
		
	/** @type {Node} */
	var lastToggledElement;

	helpers.on(document.body, 'click', function (e) {
		var target = e.target;

		if (lastToggledElement) {
			lastToggledElement.click();
		}

		lastToggledElement = null;
	}, false);

	helpers.on('.toggle-gs', 'click', function (e) {
		var gsChanged = helpers.changeGlobalState(this, 'toggle');

		helpers.changeState(this, (gsChanged ? 'toggle' : 'remove'));
		lastToggledElement = this;
		e.stopPropagation();
	});

	helpers.on('*[data-gs-target]', 'click', function (e) {
		e.stopPropagation();
	});

})();
