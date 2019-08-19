(function () {

	var helpers = require('./helpers');

	helpers.on('input[data-internal-search]', ['input', 'focus', 'blur'], function (e) {
		var searchTerm = this.value.trim();
		var targetSelector = this.getAttribute('data-internal-search');
		var searchTermRegExp = new RegExp('^' + helpers.escapeRegExp(searchTerm), 'igm');
		var targets = helpers.find(targetSelector);

		targets.forEach(function (target) {
			var targetText = target.textContent;

			if (searchTermRegExp.test(targetText) && e.type !== 'blur') {
				target.innerHTML = targetText.replace(searchTermRegExp, '<b>' +
					targetText.slice(0, searchTerm.length) + '</b>');
			}
			else {
				target.innerHTML = targetText;
			}
		});

	});

})();
