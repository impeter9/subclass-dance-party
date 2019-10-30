var addMiley = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

addMiley.prototype = Object.create(makeDancer.prototype);

addMiley.prototype.constructor = addMiley;

addMiley.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('miley');
};