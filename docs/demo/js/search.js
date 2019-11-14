(function() {
    var helpers = require('./helpers');
    var globalStates = helpers.getGlobalStates();

    helpers.on('input[data-internal-search]', ['input', 'focus', 'blur'], function(e) {
        var searchTerm = this.value.trim();
        var targetSelector = this.getAttribute('data-internal-search');
        var searchTermRegExp = new RegExp('^' + helpers.escapeRegExp(searchTerm), 'igm');
        var targets = helpers.find(targetSelector);
        var isActive = e.type !== 'blur';
        var isSearching = searchTerm;

        helpers.changeGlobalState(isSearching ? 'add' : 'remove', globalStates.searching);

        targets.forEach(function(target) {
            var targetText = target.textContent;

            if (searchTermRegExp.test(targetText) && isActive) {
                target.innerHTML = targetText.replace(searchTermRegExp, '<b>' +
                    targetText.slice(0, searchTerm.length) + '</b>');

                helpers.findParent(target.firstChild, function() {
                    helpers.addState(this, 'matches');

                    return /ul|ol/i.test(this.tagName);
                });
            }
            else {
                target.innerHTML = targetText;

                if (isActive) {
                    helpers.findParent(target.firstChild, function() {
                        if (/ul|ol/i.test(this.tagName)) {
                            return true;
                        }

                        helpers.removeState(this, 'matches');

                        return false;
                    });
                }
            }
        });
    });
})();
