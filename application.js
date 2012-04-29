// -- Game Logic ------------------------------------------------------------

$.digdog = {
  run: function() {
    $.renderHelper.loop(function(frame) {
      $.digdog.before_render();
      $.digdog.render();
      $.digdog.after_render();
    });
  },
  before_render: function() {
  },
  render: function() {
  },
  after_render: function() {
    $('#frame').html($.renderHelper.frame);
  }
};

$.renderHelper = {
  frame: 0,
  start: Date.now(),
  fps: 30,
  requestAnimFrame: (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / $.renderHelper.fps);
    }
  ),
  loop: function(proc) {
    var do_loop = function() {
      proc($.renderHelper.frame);
      $.renderHelper.requestAnimFrame(do_loop);
      $.renderHelper.frame++;
    }
    
    do_loop();
  }
};

// -- Page Ready ------------------------------------------------------------

$(function() {
  // This function is run when the page is fully loaded and ready for
  // scripting.
  $('#status').html('READY');
  
  $.digdog.run();
});
