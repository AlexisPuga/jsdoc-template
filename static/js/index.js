import '../css/jsdoc.css';
import './states';
import './buttonHandlers';
import './search';
import './linenumber';

(function () {

	var helpers = require('./helpers');
	var globalStates = helpers.getGlobalStates();
	var getCurrentPageID = function () {
		return location.href.split(/.+\//)[1];
	};
	var updateActiveLink = function () {
		var currentPageID = getCurrentPageID();
		
		helpers.find('nav li > a[href="' + currentPageID + '"]').forEach(function (link) {
			helpers.addState(link.parentNode);
		});
	};

	helpers.on(window, 'hashchange', function (e) {
		helpers.find('#page-header-opener')[0].click();
		helpers.find('nav li.is-active > a').forEach(function (target) {
			helpers.removeState(target.parentNode);
		});

		updateActiveLink();
	});

	updateActiveLink();

})();
