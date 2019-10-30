var addDancer3 = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

addDancer3.prototype = Object.create(makeDancer.prototype);

addDancer3.prototype.constructor = addDancer3;

addDancer3.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('dancer3');
};
