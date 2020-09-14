$(function() {

  $('#progress-bar').circularProgress({
    color: 'red',
    line_width: 15,
    width: '350px',
    height: '350px',
  });

  setTimeout(function () {

    $('#progress-bar').circularProgress({
      color: 'red',
      percent: 0,
      starting_position: 0,
    }).circularProgress('animate', 100, 10000)

  },2000)


});
