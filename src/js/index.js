import '../css/jsdoc.css';
import './states';
import './buttonHandlers';
import './search';
import './linenumber';

(function () {

	var helpers = require('./helpers');
	var globalStates = helpers.getGlobalStates();
	var updateActiveLink = function () {
		var currentPageID = location.href.split(/.+\//)[1];
		
		helpers.find('nav li > a[href="' + currentPageID + '"]').forEach(function (link) {
			helpers.addState(link.parentNode);
		});
	};

	helpers.on(window, 'hashchange', function (e) {
		helpers.find('#page-header-opener')[0].click();

		helpers.find('nav li > a.is-active').forEach(function (target) {
			helpers.removeState(target.parentNode);
		});

		updateActiveLink();
	});

	updateActiveLink();

})();
