/**
 * @param somebody
 */
function sayHello1(somebody) {
    alert('Hello ' + somebody);
}
/**
 * @param {string} somebody
 */
function sayHello2(somebody) {
    alert('Hello ' + somebody);
}
/**
 * @param {string} somebody Somebody's name.
 */
function sayHello3(somebody) {
    alert('Hello ' + somebody);
}
/**
 * @param {string} somebody - Somebody's name.
 */
function sayHello4(somebody) {
    alert('Hello ' + somebody);
}
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign1 = function(employee) {
    // ...
};
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign2 = function({ name, department }) {
    // ...
};
/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
Project.prototype.assign3 = function(employees) {
    // ...
};
/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello5(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}
/**
 * @param {string=} somebody - Somebody's name.
 */
function sayHello6(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}
/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */
function sayHello7(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}
/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello8(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);
}
/**
 * @param {*} somebody - Whatever you want.
 */
function sayHello9(somebody) {
    console.log('Hello ' + JSON.stringify(somebody));
}
/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
 */
function sum(num) {
    var i = 0, n = arguments.length, t = 0;
    for (; i < n; i++) {
        t += arguments[i];
    }
    return t;
}
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */

/**
 * Does something asynchronously and executes the callback on completion.
 * @param {requestCallback} cb - The callback that handles the response.
 */
function doSomethingAsynchronously(cb) {
    // code
};