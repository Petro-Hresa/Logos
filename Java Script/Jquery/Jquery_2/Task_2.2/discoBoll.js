$(function () {
  function discoBoll() {
    let screenW = ($(screen.width));
    let screenH = $(screen.height);

    let boxW = $('#box').width();
    let boxH = $('#box').height();

    let randomW = Math.floor(Math.random() * ((screenW[0] - boxW)) / 2);
    let randomH = Math.floor(Math.random() * ((screenH[0] - boxH)) / 2);


    $('#box').animate({
      'left': randomW + 'px',
      'top': randomH + 'px',
    }, 3000, 'easeInOutBack');

    function colorChange() {
      $('#box').css({
        'background-color': randomColor(),
        'border': `4px solid ${randomColor()}`,
        'boxShadow': `0 0 10px 4px ${randomColor()}`
      });
    }

    setInterval(colorChange, 600);

    function randomColor() {
      let color = '#';
      let letters = '0123456789ABCDEF'.split('');
      for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)]
      }
      return color;
    }
  }

  setInterval(discoBoll, 1000)


});
