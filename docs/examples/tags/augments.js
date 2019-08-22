/**
 * Abstract class for things that can fly.
 * @class
 */
function Flyable() {
    this.canFly = true;
}

/** Take off. */
Flyable.prototype.takeOff = function() {
    // ...
};

/**
 * Abstract class representing a bird.
 * @class
 */
function Bird(canFly) {
    this.canFly = canFly;
}

/** Spread your wings and fly, if possible. */
Bird.prototype.takeOff = function() {
    if (this.canFly) {
        this._spreadWings()
            ._run()
            ._flapWings();
    }
};

/**
 * Class representing a duck.
 * @class
 * @augments Flyable
 * @augments Bird
 */
function Duck() {}

// Described in the docs as "Spread your wings and fly, if possible."
Duck.prototype.takeOff = function() {
    // ...
};