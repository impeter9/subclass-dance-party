$(document).ready(function() {
  window.dancers = [];
  window.marcusArray = [];
  window.awkArray = [];

  var interact = function () {
    for (var i = 0; i < window.marcusArray.length; i++) {
      for (var j = 0; j < window.awkArray.length; j++) {
        var marcusTop = window.marcusArray[i].top;
        var marcusLeft = window.marcusArray[i].left;
        var awkTop = window.awkArray[j].top;
        var awkLeft = window.awkArray[j].left;
        if (((marcusTop - awkTop)**2 + (marcusLeft - awkLeft)**2)**(1/2) < 300) {
          if ((marcusTop - awkTop)**2 > (marcusLeft - awkLeft)**2) {
            if (awkLeft > marcusLeft) {
              window.awkArray[j].setPosition(awkTop, awkLeft + 200);
            } else {
              window.awkArray[j].setPosition(awkTop, awkLeft - 200);
            }
          } else {
            if (awkTop > marcusTop) {
              window.awkArray[j].setPosition(awkTop + 200, awkLeft);
            } else {
              window.awkArray[j].setPosition(awkTop - 200, awkLeft);
            }
          }
        }
      }
    }
  };

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.75,
      $("body").width() * Math.random() * 0.85,
      750,
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.marcusArray.push(dancer);
    interact();
  });

  $('.addDancerButton2').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.70,
      $("body").width() * Math.random() * 0.85,
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addDancerButton3').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.70,
      $("body").width() * Math.random() * 0.85,
      750,
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    window.awkArray.push(dancer);
    interact();
  });

  $('.lineUpDancers').on('click', function(event) {
    $(".miley").css('animation-play-state', 'paused');
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition($("body").height() * 0.5, ($("body").width()/(window.dancers.length-1)) * i);
    }
  });
});













































// $(document).ready(function() {
//   window.dancers = [];

//   $('.addDancerButton').on('click', function(event) {
//     /* This function sets up the click handlers for the create-dancer
//      * buttons on dancefloor.html. You should only need to make one small change to it.
//      * As long as the "data-dancer-maker-function-name" attribute of a
//      * class="addDancerButton" DOM node matches one of the names of the
//      * maker functions available in the global scope, clicking that node
//      * will call the function to make the dancer.
//      */

//     /* dancerMakerFunctionName is a string which must match
//      * one of the dancer maker functions available in global scope.
//      * A new object of the given type will be created and added
//      * to the stage.
//      */
//     var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//     // get the maker function for the kind of dancer we're supposed to make
//     var dancerMakerFunction = window[dancerMakerFunctionName];

//     // make a dancer with a random position

//     var dancer = new dancerMakerFunction(
//       $("body").height() * Math.random(),
//       $("body").width() * Math.random(),
//       Math.random() * 1000,
//     );
//     $('body').append(dancer.$node);
//   });
// });