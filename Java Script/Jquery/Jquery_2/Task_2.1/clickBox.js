$(function () {
  $('#box').on('click', function positionRandom() {

    let screenW = ($(screen.width));
    let screenH = $(screen.height);

    let boxW = $('#box').width();
    let boxH = $('#box').height();

    let randomW = Math.floor(Math.random() * ((screenW[0] - boxW) / 2));
    let randomH = Math.floor(Math.random() * ((screenH[0] - boxH) / 2));

    $(this).animate({
      "width": randomW + 'px',
      "height": randomH + 'px',
      'left': randomW + 'px',
      'top': randomH + 'px',
    }, 3000, "easeInOutBack");

    $('#box').css({
      'background-color': randomColor(),
      'transition':'background-color 3s ease-in-out .5s'
    });
    //Generation background-color
    function randomColor() {
      let color = '#';
      let letters = '0123456789ABCDEF'.split('');
      for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)]
      }
      return color;
    }
  });

});
