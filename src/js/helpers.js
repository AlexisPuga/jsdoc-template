/**
 * @param {?object} v - An array like.
 * @returns {Array}
 * @throws if v is null
 */
exports.toArray = function (v) {
	return [].slice.call(v);
};
/** @returns Array */
exports.find = function (selector, parent) {
	return exports.toArray((parent || document).querySelectorAll(selector + ''));
};
/**
 * Adds an event listener to an element.
 *
 * @param {string|Element[]} elements - The targets.
 * @param {string|string[]} eventNames - The event types.
 * @param {function} listener - The handler for the event.
 * @param {object|boolean} [options=false] - Options for addEventListener
 */
exports.on = function (elements, eventNames, listener, options) {
	if (typeof elements === 'string') {
		elements = exports.find(elements);
	}

	if (!Array.isArray(elements)) {
		elements = [elements];
	}

	if (!Array.isArray(eventNames)) {
		eventNames = [eventNames];
	}

	elements.forEach(function (element) {
		eventNames.forEach(function (eventName) {
			element.addEventListener(eventName, listener, options || false);
		});
	});
};
/**
 * A function to be called on each parent node.
 *
 * @typedef {function} findParent~fn
 * @this {!Node} - The current node.
 * @returns {boolean} A truthy value if the element matches with the
 *                      requirements.
 */
/**
 * @param {Element} element - The start point.
 * @param {findParent~fn} fn - A function that returns a boolean.
 * @returns {?Element} The parent node or null.
 */
exports.findParent = function (element, fn) {
	var currentElement = element;

	while ((currentElement = currentElement.parentNode) && !fn.call(currentElement));

	return currentElement;
};
/**
 * Changes (adds, removes or toggles) an element class.
 *
 * @param {Element} target - The target element.
 * @param {string} action - "add", "remove" or "toggle".
 * @param {string} [state=target.getAttribute('data-toggle-s')
 *                 ||'is-active'] - A class name.
 * @returns {boolean} true if the state was changed, false otherwise.
 */
exports.changeState = function (target, action, state) {
	if (!state) {
		state = target.getAttribute('data-toggle-s') ||
			target.getAttribute('data-add-s') ||
			target.getAttribute('data-remove-s') ||
			'is-active';
	}

	return (/(add|remove|toggle)/.test(action)
		? target.classList[action](state)
		: false
	);
};
/**
 * {@link changeState|Changes the state} of document.body
 *
 * @param {Element} element - The element from which it was called from.
 * @param {changeState~action} action - An action for {@link changeState}.
 * @param {changeState~state} [globalState=element.getAttribute('data-' +
 *                            action + '-gs')] - An state for document.body
 * @returns {boolean} true if the state changed, false otherwise.
 */
exports.changeGlobalState = function (element, action, globalState) {
	var attributeName = 'data-' + action + '-gs';
	var globalStates = JSON.parse(document.body.getAttribute('data-gs'));

	if (!globalState) {
		globalState = globalStates[element.getAttribute(attributeName)];
	}

	if (!globalState) {
		return false;
	}

	return exports.changeState(document.body, action, globalState);
};

/** Based on: https://github.com/sindresorhus/escape-string-regexp */
exports.escapeRegExp = function (string) {
	return string.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
};
