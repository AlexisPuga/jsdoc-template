/**
 * @param {?object} v - An array like.
 * @returns {Array}
 * @throws if v is null
 */
exports.toArray = function(v) {
    return [].slice.call(v);
};
/** @returns Array */
exports.find = function(selector, parent) {
    return exports.toArray((parent || document).querySelectorAll(String(selector)));
};
/**
 * A function to be called on each parent node.
 *
 * @typedef {function} findParent~fn
 * @this Node
 * @returns {boolean} A truthy value if the element matches with the
 *                      requirements.
 */
/**
 * @param {Element} element - The start point.
 * @param {findParent~fn} fn - A function that returns a boolean.
 * @returns {?Element} The parent node or null.
 */
exports.findParent = function(element, fn) {
    var currentElement = element;

    while ((currentElement = currentElement.parentNode)) {
        if (fn.call(currentElement)) {
            break;
        }
    }

    return currentElement;
};
/**
 * Adds an event listener to an element.
 *
 * @param {string|Element[]} elements - The targets.
 * @param {string|string[]} eventNames - The event types.
 * @param {function} listener - The handler for the event.
 * @param {object|boolean} [options=false] - Options for addEventListener
 * @this Element
 */
exports.on = function(elements, eventNames, listener, options) {
    if (typeof elements === 'string') {
        elements = exports.find(elements);
    }

    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    if (!Array.isArray(eventNames)) {
        eventNames = [eventNames];
    }

    elements.forEach(function(element) {
        eventNames.forEach(function(eventName) {
            element.addEventListener(eventName, listener, options || false);
        });
    });
};
/**
 * An element class.
 * @typedef {string} state
 */

/**
 * "add", "remove" or "toggle".
 * @typedef {string} action
 */

/**
 * The topmost Element.
 * @typedef {Element} globalElement
 */

/**
 * An {@link state} of a {@link globalElement}.
 * @typedef {string} globalState
 */

/**
 * Listens a {@link state}.
 * @see {@link on}.
 */
/**
 * Listens a {@link state}.
 * @see {@link on}
 */
exports.onState = function(elements, stateName, listener, options) {
    return exports.on(elements, ':' + stateName, listener, options);
};

/**
 * Listens a {@link globalState|global state}.
 * @see {@link onState}.
 */
exports.onGlobalState = function(globalStateName, listener, options) {
    var gs = exports.getGlobalStates()[globalStateName];
    var globalElement = exports.getGlobalElement();

    return exports.onState(globalElement, gs, listener, options);
};
exports.hasState = function(target, state) {
    return target.classList.contains(state);
};
exports.hasGlobalState = function(globalState) {
    return exports.hasState(exports.getGlobalElement(), globalState);
};
/** @returns {@link globalElement} */
exports.getGlobalElement = function() {
    return document.body;
};
/**
 * Dispatches an Event from `target`.
 *
 * @param {Element} target - The Element to dispatch the Event from.
 * @param {string} type - The name of the event.
 * @param {?object} options - Options for CustomEvent.
 * @return {boolean}
 */
exports.triggerCustomEvent = function(target, type, options) {
    return target.dispatchEvent(new CustomEvent(type, options));
};
/**
 * @typedef {!object} dispatchedState
 * @property {action} action
 * @property {data} data
 */
/**
 * {@link dispatchedState|Dispatches a state} from `target`.
 *
 * @param {Element} target - The element that contains the {@link state}.
 * @param {state} state - Some state.
 * @param {action} action - Some valid action.
 * @param {*} [data] - Data for the custom event.
 * @returns {boolean}
 */
exports.triggerState = function(target, state, action, data) {
    return exports.triggerCustomEvent(target, ':' + state, {
        detail: {
            action,
            data: data
        }
    });
};
/**
 * {@link triggerState|Triggers a state} taking
 * {@link getGlobalElement|the global element} as the target.
 * @see {@link triggerState}
 */
exports.triggerGlobalState = function(state, action, data) {
    return exports.triggerState(exports.getGlobalElement(), state, action, data);
};
exports.getRawState = function(target, attributeName) {
    return target.getAttribute(attributeName);
};
/**
 * Changes (adds, removes or toggles) a {@link state} and
 * {@link triggerState|triggers it}.
 *
 * @param {Element} target - The target element.
 * @param {action} action - Some action.
 * @param {state} [state=target.getAttribute('data-s-' + action)||'is-active']
 *     A class name.
 * @param {*} [data] - Data for the {@link triggerState|triggered state}.
 * @returns {boolean} true if the state was changed, false otherwise.
 */
exports.changeState = function(target, action, state, data) {
    var defaultAttributeName = 'data-s-' + action;
    var done;

    if (!state && !(state = exports.getRawState(target, defaultAttributeName))) {
        state = 'is-active';
    }

    if (!/(add|remove|toggle)/.test(action)) {
        return false;
    }

    done = exports.triggerState(target, state, action, data) !== false;

    if (done) {
        target.classList[action](state);
    }

    return done;
};
exports.addState = function(target, state, data) {
    return exports.changeState(target, 'add', state, data);
};
exports.addGlobalState = function(target, state, data) {
    return exports.addState(exports.getGlobalElement(), 'add', state, data);
};
exports.removeState = function(target, state, data) {
    return exports.changeState(target, 'remove', state, data);
};
exports.removeGlobalState = function(target, state, data) {
    return exports.removeState(exports.getGlobalElement(), 'remove', state, data);
};
exports.toggleState = function(target, state, data) {
    return exports.changeState(target, 'toggle', state, data);
};
exports.toggleGlobalState = function(target, state, data) {
    return exports.toggleState(exports.getGlobalElement(), 'toggle', state, data);
};
/**
 * Gets an attribute from `target` and parses it into a JSON.
 *
 * @param {Element} globalElement - The target.
 * @param {string} [attributeName='data-s'] - The attribute name that
 *     contains an stringified JSON.
 * @return {!object} A JSON-parsed value.
 */
exports.getStates = function(target, attributeName) {
    var rawState = exports.getRawState(target, attributeName || 'data-s');
    var states;

    try {
        states = JSON.parse(rawState);
    } catch (e) {
        return {};
    }

    return (states instanceof Object ? states : {});
};
exports.getState = function(target, attributeName, stateKey) {
    return exports.getStates(target, attributeName, stateKey);
};
/**
 * {@link getState|Gets a JSON of all states} from
 * {@link globalElement|the global element}.
 *
 * @see {@link getStates}
 * @param {string} [attributeName='data-gs']
 */
exports.getGlobalStates = function(attributeName) {
    return exports.getStates(exports.getGlobalElement(), attributeName || 'data-gs');
};
/**
 * {@link changeState|Changes the state} of document.body
 *
 * @see {@link changeState}.
 */
exports.changeGlobalState = function(action, globalState, data) {
    return exports.changeState(exports.getGlobalElement(), action, globalState, data);
};

/* ! Based on: https://github.com/sindresorhus/escape-string-regexp */
exports.escapeRegExp = function(string) {
    return string.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
};
