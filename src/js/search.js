(function () {

	var helpers = require('./helpers');
	var globalStates = helpers.getGlobalStates();

	helpers.on('input[data-internal-search]', ['input', 'focus', 'blur'], function (e) {
		var searchTerm = this.value.trim();
		var targetSelector = this.getAttribute('data-internal-search');
		var searchTermRegExp = new RegExp('^' + helpers.escapeRegExp(searchTerm), 'igm');
		var targets = helpers.find(targetSelector);
		var isActive = e.type !== 'blur';
		var isSearching = searchTerm && isActive;

		helpers.changeGlobalState(isSearching ? 'add' : 'remove', globalStates.searching);

		targets.forEach(function (target) {
			var targetText = target.textContent;
			var parentNode = target.parentNode;

			if (searchTermRegExp.test(targetText) && isActive) {
				target.innerHTML = targetText.replace(searchTermRegExp, '<b>' +
					targetText.slice(0, searchTerm.length) + '</b>');
				parentNode.removeAttribute('hidden');
			}
			else {
				target.innerHTML = targetText;

				if (isActive) {
					parentNode.setAttribute('hidden', '');
				}
			}
		});

	});

})();
