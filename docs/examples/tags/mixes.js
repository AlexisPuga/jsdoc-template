/**
 * @constructor FormButton
 * @mixes Eventful
 */
var FormButton = function() {
    // code...
};
FormButton.prototype.press = function() {
  this.fire('press', {});
}
mix(Eventful).into(FormButton.prototype);