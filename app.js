(function() {

  $(function() {
    window.app = {
      init: function() {
        window.app.adaptToScale();
        return $(window).resize(function() {
          return window.app.adaptToScale();
        });
      },
      adaptToScale: function() {
        return $("#logo").css({
          marginTop: $(window).height() / 2 - $("#logo").outerHeight() / 2,
          marginLeft: $(window).width() / 2 - $("#logo").outerWidth() / 2
        });
      }
    };
    return app.init();
  });

}).call(this);