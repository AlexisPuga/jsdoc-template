/** @namespace */
var BaseObject = {
    /**
     * foo is now BaseObject#foo rather than BaseObject.foo.
     * @instance
     */
    foo: null
};

/** Generates BaseObject instances. */
function fooFactory(fooValue) {
    var props = { foo: fooValue };
    return Object.create(BaseObject, props);
}