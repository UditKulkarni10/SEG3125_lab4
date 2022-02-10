// onResize funtion adapted from https://stackoverflow.com/questions/14735274/bootstrap-css-hides-portion-of-container-below-navbar-navbar-fixed-top

var onResize = function() {
    $("body").css("padding-top", ($(".fixed-top").height() - 20));
  };

  $(window).resize(onResize);

  $(function() {
    onResize();
  });