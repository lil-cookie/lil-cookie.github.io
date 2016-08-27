var updownElem = document.getElementById('updown');

    var pageYLabel = 0;

    updownElem.onclick = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;

      switch (this.className) {
        case 'up':
          pageYLabel = pageY;
          window.scrollTo(0, 0);
          this.className = 'down';
          break;

        case 'down':
          window.scrollTo(0, pageYLabel);
          this.className = 'up';
      }

    }

    window.onscroll = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
      var innerHeight = document.documentElement.clientHeight;

      switch (updownElem.className) {
        case '':
          if (pageY > innerHeight) {
            updownElem.className = 'up';
          }
          break;

        case 'up':
          if (pageY < innerHeight) {
            updownElem.className = '';
          }
          break;

        case 'down':
          if (pageY > innerHeight) {
            updownElem.className = 'up';
          }
          break;

      }
    }
	
	$(function() {
var $elem = $('#content');
 
$('#nav_up').fadeIn('slow');
$('#nav_down').fadeIn('slow');
 
$(window).bind('scrollstart', function(){
$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
});
$(window).bind('scrollstop', function(){
$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
});
 
$('#nav_down').click(
function (e) {
$('html, body').animate({scrollTop: $elem.height()}, 800);
}
);
$('#nav_up').click(
function (e) {
$('html, body').animate({scrollTop: '0px'}, 800);
}
);
});
	