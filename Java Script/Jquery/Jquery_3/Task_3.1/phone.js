$(function () {

  let timeOut = 0;
  let spanText = $('#time > span').text();
  let flag = true;
  let tm = setInterval(time, 500);

  function time() {

    flag ? $('#black').slideDown(30000) : $('#black').slideUp(30000);

    if (spanText > 0) {

      if (timeOut === 60) {

        timeOut = 0;
        spanText--;
        flag ? flag = false : flag = true;

      } else timeOut++;

    } else clearInterval(tm);

    $('#time > span').text(spanText);

  }

});
