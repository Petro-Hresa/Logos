$(function () {
//**********************Header*************************
//  Flag for button
  let clickFontFamily = true;
  let clickFontSize = true;
  let flagColor = true;
  let flagBackground = true;
  let flagForCreateTable = false;
//--------- Buttons Font style-------

  //--------Functions Click for All Button Font------
  $('.btn__font').on('click', function () {

    $('.btn__font').css('boxShadow', 'none');
    $(this).css('boxShadow', '0 0 0 2px #F0F8FF');

    if (clickFontFamily == false) {
      $('#box__font-family').css('display', '');
    }

    if (clickFontSize == false) {
      $('#box__font-size').css('display', '');
    }

  });

  $('#content').on('click', function () {
    $('.btn__font').css('boxShadow', 'none');
  });

// Function go to create table
  $('.btn__font:first').on('click', function () {
    if (flagForCreateTable == true) {

      $('#wrapper__btn_font').css('display', 'none');
      $('#wrapper__btn_table-list').css('display', 'flex');
      $('#content').css('display', 'none');
      $('#textarea').css('display', 'block');
      $('#textarea').text($('#content').html());

    }

  });
  $('.btn__font:first').css('background-color', 'rgba(220, 220, 220, 200)');


//function Button Bold
  let flagBold = true;
  $('#btn__bold').on('click', function () {

    if (flagBold) {
      $('#content').toggleClass('bold__text');
      $(this).css('background-color', 'rgba(220, 220, 220, 200)');
      flagBold = false;
    } else {
      $('#content').toggleClass('bold__text');
      $(this).css('background-color', '');
      flagBold = true;
    }

  });

//function Button cursive
  let flagCursive = true;
  $('#btn__cursive').on('click', function () {

    if (flagCursive) {
      $('#content').toggleClass('cursive__text');
      $(this).css('background-color', 'rgba(220, 220, 220, 200)');
      flagCursive = false;
    } else {
      $('#content').toggleClass('cursive__text');
      $(this).css('background-color', '');
      flagCursive = true;
    }

  });

//function Button underline
  let flagUnderline = true;
  $('#btn__underline').on('click', function () {

    if (flagUnderline) {
      $('#content').toggleClass('underline__text');
      $(this).css('background-color', 'rgba(220, 220, 220, 200)');
      flagUnderline = false;
    } else {
      $('#content').toggleClass('underline__text');
      $(this).css('background-color', '');
      flagUnderline = true;
    }

  });

//function Button through
  let flagThrough = true;
  $('#btn__through').on('click', function () {

    if (flagThrough) {
      $('#content').toggleClass('through__text');
      $(this).css('background-color', 'rgba(220, 220, 220, 200)');
      flagThrough = false;
    } else {
      $('#content').toggleClass('through__text');
      $(this).css('background-color', '');
      flagThrough = true;
    }

  });

//function Button text left
  $('#btn__text-left').on('click', function () {
    $('#content').css({
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'flex-start',
    });
  });

//function Button text center
  $('#btn__text-center').on('click', function () {
    $('#content').css({
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
    });
  });

//function Button text right
  $('#btn__text-right').on('click', function () {
    $('#content').css({
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'flex-end',
    });
  });

//---------------------------Function Button Font-Family---------------------------------
  $('#btn__font-family').on('click', function () {

    if (clickFontSize == false) {
      $('#box__font-size').css('display', '');
      clickFontSize = true
    }

    if (clickFontFamily) {
      $('#box__font-family').css('display', 'block');
      clickFontFamily = false;

    } else {
      $('#box__font-family').css('display', '');
      clickFontFamily = true
    }

  });
  //font-family box Generation List
  $('#list__font-family li').each(function () {
    $(this).css('fontFamily', $(this).text());
  });
  // font-family Function choose
  $('#list__font-family li').on('click', function () {

    $('#list__font-family li').css({
      'background': '',
      'color': ''
    });
    $('#content').css('fontFamily', $(this).text());
    $(this).css({
      'background': '#1E90FF',
      'color': 'white'
    });
    clickFontFamily = false;

  });

//----------------------Function Button Font-Size-----------------------
  $('#btn__font-size').on('click', function () {

    if (clickFontFamily == false) {
      $('#box__font-family').css('display', '');
      clickFontFamily = true
    }

    if (clickFontSize) {
      $('#box__font-size').css('display', 'block');
      clickFontSize = false;
    } else {
      $('#box__font-size').css('display', '');
      clickFontSize = true
    }

  });
  // font-size box Generation List
  $('#list__font-size li').each(function () {
    $(this).css('fontSize', $(this).text());
  });
  // font-size Function choose
  $('#list__font-size li').on('click', function () {
    $('#list__font-size li').css({'background': '', 'color': ''});
    $('#content').css('fontSize', $(this).text());
    $(this).css({'background': '#1E90FF', 'color': 'white'});
    clickFontSize = false;
  });


//---------------------Function Button Color-Text---------------------
  $('#btn__color').on('click', function () {

    if (flagBackground == false) {
      $('body').css('background', '');
      flagBackground = true;
    }

    if (clickFontFamily == false) {
      $('#box__font-family').css('display', '');
      clickFontFamily = true
    }

    if (clickFontSize == false) {
      $('#box__font-size').css('display', '');
      clickFontSize = true
    }

    if (flagColor) {
      $('#wrap__colors').css('top', '0');
      $('body').css('background', 'rgba( 0, 0, 0, .40)');
    } else {
      $('#wrap__colors').css('top', '');
      $('body').css('background', '')
      flagColor = true;
    }

  });

  // colors-text Generation
  let arrColors = ['Green', 'LimeGreen', 'SeaGreen', 'MediumSpringGreen', 'DodgerBlue', 'SteelBlue', 'MediumOrchid', 'MediumPurple', 'SlateBlue', 'DarkSlateBlue', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'Coral', 'Tomato', 'Honeydew', 'DarkGrey', 'Gray', 'DimGray', 'Black'];
  for (let i = 0; i < arrColors.length; i++) {

    let createColor = document.createElement('div');
    createColor.classList.add('inner__color__background');
    createColor.style.background = arrColors[i];
    $('#box__colors').append(createColor);

    // color-text function
    createColor.onclick = function () {
      colorText(i)
    }

  }

  // color-text function
  function colorText(i) {
    $('*').css('transition', 'none');
    $('#content').css('color', arrColors[i]);
  }

  // color-text close
  $('.close__box_fon').on('click', function () {
    $('*').css('transition', '');
    flagColor = false;
  })


//------------------------Function Button background------------------------
  $('#btn__background').on('click', function () {

    if (flagBackground == false) {
      $('body').css('background', '');
      flagColor = true;
    }

    if (clickFontFamily == false) {
      $('#box__font-family').css('display', '');
      clickFontFamily = true
    }

    if (clickFontSize == false) {
      $('#box__font-size').css('display', '');
      clickFontSize = true
    }

    if (flagBackground) {
      $('#wrap__background').css('top', '0');
      $('body').css('background', 'rgba( 0, 0, 0, .40)');
    } else {
      $('#wrap__background').css('top', '');
      $('body').css('background', '');
      flagBackground = true;
    }

  });

  // background Create buttons
  $('.btn__itm_fon:first').css({
    'border': '1px solid rgb(211, 211, 211)',
    'borderBottom': 'none',
    'color': 'black',
  });

  $('.stile__boxes:gt(0)').css('display', '');
  $('.stile__boxes:gt(1)').css('display', 'none');

  // background function  buttons
  $('.btn__itm_fon').on('click', function () {

    $('.btn__itm_fon').css({
      'border': 'none',
      'border-bottom': '1px solid rgb(211, 211, 211)',
      'color': ''
    });

    $(this).css({
      'border': '1px solid rgb(211, 211, 211)',
      'z-index': '20',
      'borderBottom': 'none',
      'color': 'black'
    })

  });

  // ----------------------Background-color click ------------------------
  $('#color').on('click', function () {
    $('.stile__boxes').not('.stile__boxes:eq(0)').css('display', 'none');
    $('.stile__boxes:eq(1)').css('display', '');
  });

  // Background-color create
  for (let k = 0; k < arrColors.length; k++) {

    let createBackgroundColor = document.createElement('div');
    createBackgroundColor.classList.add('inner__color__background');
    createBackgroundColor.style.background = arrColors[k];
    $('#box__beg_color').append(createBackgroundColor);

    // background-color function
    createBackgroundColor.onclick = function () {
      backgroundColor(k)
    }

  }

  // background-color function
  function backgroundColor(k) {
    $('#content').css('background-image', 'none');
    $('#content').css('background-color', arrColors[k]);

  }


  //------------------- Background-image click -------------------
  $('#images').on('click', function () {
    $('.stile__boxes').not('.stile__boxes:eq(0)').css('display', 'none');
    $('.stile__boxes:eq(2)').css('display', '');
  });

  //background-image create
  let arrImages = [
    'https://cdn.wallscloud.net/converted/862052234-vershini-PAWl-1680x1050-MM-100.jpg',
    'https://cdn.wallscloud.net/converted/2483934901-zakat-64KQ-1680x1050-MM-100.jpg',
    'https://cdn.wallscloud.net/converted/507487350-bmw-420d-m-sport-rnVk-1680x1050-MM-100.jpg',
    'https://cdn.wallscloud.net/converted/3495807954-ozero-72VG-1680x1050-MM-100.jpg',
    'https://i.pinimg.com/originals/29/69/ae/2969aec7533d3e8ba7357b0597e87b71.jpg',
    'https://vsthemes.ru/uploads/posts/2018-09/1537726086_2018-09-23_210659.jpg',
    'https://cdn.wallscloud.net/converted/1020736681-volni-9PY4-2880x1800-MM-100.jpg',
    'https://zastavok.net/main/leto/158561400497.jpg',
    'https://cdn.wallscloud.net/converted/2453781101-zakat-RDj0-1680x1050-MM-100.jpg'
  ];

  for (let j = 0; j < arrImages.length; j++) {

    let createBackgroundImg = document.createElement('div');
    createBackgroundImg.classList.add('inner__img__background');
    createBackgroundImg.style.backgroundImage = ` url(${arrImages[j]})`;
    $('#box__beg_images').append(createBackgroundImg);

    // background-image  function
    createBackgroundImg.onclick = function () {
      backgroundImg(j)
    }

  }

  // background-image  function
  function backgroundImg(j) {
    $('#content').css('background-image', ` url(${arrImages[j]})`);
  }


//-----------------------File click ---------------------------
  $('#files').on('click', function () {
    $('.stile__boxes').not('.stile__boxes:eq(0)').css('display', 'none');
    $('.stile__boxes:eq(3)').css('display', '');
  });

// file function ------------------------
  $('#file').on('change', function () {

    $('#label__file').text($('#file').val());
    let file = this.files[0];

    $('#btn-browse').on('click', function () {
      $('#content').css('background-image', ` url(${URL.createObjectURL(file)})`);
    });

  });

// Background Close Box
  $('.close__box_fon').on('click', function () {
    flagBackground = false;
  });

//-------------------Button Sign-In---------------------------

  $('#sign-in__btn i:first').on('click', function () {

    $('body').css('background', 'rgba( 0, 0, 0, .40)');
    $('#sign-in').css('top', '23px');
    $('.sign-in__form_item:last').css({
      'background': 'DimGray',
      'color': 'White',
      'outline': 'none',
      'cursor': 'pointer'
    })

  });
  //sign-in icon style
  $('#sign-in__btn i:last').css('display', 'none');
  $('#sign-in__btn i').css('cursor', 'pointer');

  let signInForm = document.forms['signInForm'];
  let login = 'Admin';
  let password = '1111';

  // button in form sign in
  $('.sign-in__form_item:last').on('click', function () {

    for (let i = 0; i < signInForm.elements.length - 1; i++) {

      if (signInForm.elements[0].value == login && signInForm.elements[1].value == password) {

        $('#sign-in__btn i:first').css('display', 'none');
        $('#sign-in__btn i:last').css('display', 'block');
        $('.btn__font:first').css('background-color', '');
        signInForm.elements[i].style.boxShadow = '';
        $('#form-item__error-enter').text('');
        $('body').css('background', '');
        $('#sign-in').css('top', '');
        flagForCreateTable = true;

      } else if (signInForm.elements[i].value == '') {

        signInForm.elements[i].style.boxShadow = '0 0 0 1px red';
        $('#form-item__error-enter').text('Value is empty');

      } else {

        signInForm.elements[i].style.boxShadow = '0 0 0 1px red';
        $('#form-item__error-enter').text('Please check your login or password');

      }

    }

  });

  // sign in close
  $('#sign-in__btn i:last').on('click', function () {

    $('body').css('background', 'rgba( 0, 0, 0, .40)');
    $('#sign-out').css('top', '40%');

  });
  $('#btn__cancel').on('click', function () {
    $('body').css('background', '');
    $('#sign-out').css('top', '');
  });
  //sign-out
  $('#btn__sign-out').on('click', function () {

    $('#sign-in__btn i:first').css('display', 'block');
    $('#sign-in__btn i:last').css('display', 'none');
    $('.btn__font:first').css('background-color', 'rgba(220, 220, 220, 200)');
    $('body').css('background', '');
    $('#sign-out').css('top', '');
    for (let i = 0; i < signInForm.elements.length - 1; i++) {
      signInForm.elements[i].value = '';
    }
    flagForCreateTable = false;

  });


//===============================Wrapper Create Table and list===========================
  $('#wrapper__btn_table-list .btn__font:first').css('borderRadius', '5px 0 0 5px');
  $('#wrapper__btn_table-list .btn__font:last').css('borderRadius', ' 0 5px 5px 0');
  $('#wrapper__btn_table-list').css('display', 'none');


//--------------- Function Button Save-------------------
  $('#btn__save').on('click', function () {

    $('#wrapper__btn_font').css('display', 'flex');
    $('#wrapper__btn_table-list').css('display', 'none');
    $('#content').css('display', 'block');
    $('#textarea').css('display', 'none');
    $('#content').html($('#textarea').val());

  });


//-----------------Function Button Table--------------------
  $('#btn__table').on('click', function () {
    $('#create__table').css('top', '23px');
    $('#textarea').css('background', 'rgba( 0, 0, 0, .40)');
  });

  //table error
  let formTable = document.forms['formTable'];
  $('#btn__create-table').on('click', function () {
    let flagValue = true;
    for (let i = 0; i < formTable.elements.length; i++) {

      if (formTable.elements[i].value != '') {
        formTable.elements[i].style.boxShadow = '';
        if (flagValue) {
          $('#error__table').html('');
          flagValue = true;
          if (i == 6) {
            createTable(i);
          }
        }
      } else {
        formTable.elements[i].style.boxShadow = ' 0 0 0 1px #f0143d';
        $('#error__table').html('invalid value ');
        flagValue = false
      }
      //table reset
      $('#reset').on('click', function reset() {
        formTable.elements[i].value = '';
      });

    }
  });

  //table create
  function createTable(i) {
    let createTable = document.createElement('table');
    for (let tr = 0; tr < formTable.elements[0].value; tr++) {
      let createTR = document.createElement('tr');
      for (let td = 0; td < formTable.elements[3].value; td++) {
        let createTD = document.createElement('td');
        createTD.innerHTML = 'TD';
        createTD.style.width = `${formTable.elements[1].value}px`;
        createTD.style.height = `${formTable.elements[4].value}px`;
        createTD.style.border = `${formTable.elements[2].value}px ${formTable.elements[5].value} ${formTable.elements[6].value} `;
        createTR.appendChild(createTD);
      }
      $(createTable).append(createTR)
    }
    $('#content').append($(createTable));
    $('#textarea').text($('#content').html());
  }

  //table close box
  $('.close__box_create').on('click', function () {
    $('#create__table').css('top', '');
    $('#textarea').css('background', '');
    for (let i = 0; i < formTable.elements.length; i++) {
      formTable.elements[i].value = '';
      formTable.elements[i].style.boxShadow = '';
    }
    $('#error__table').html('');
  });


//------------------Function Button List OL--------------------
  $('#btn__list-ol').on('click', function () {
    $('#create__list-ol').css('top', '23px');
    $('#textarea').css('background', 'rgba( 0, 0, 0, .40)');
  });

  // list ol error
  let inputLIstOl = document.forms['createListOl'];
  $('#btn__create-ol').on('click', function () {
    let flagErrorOl = true;
    for (let i = 0; i < inputLIstOl.elements.length; i++) {

      if (inputLIstOl.elements[i].value != '') {
        inputLIstOl.elements[i].style.boxShadow = '';
        if (flagErrorOl) {
          $('#error__ol').text('');
          flagErrorOl = true;
          if (i == 1) {
            createListOl()
          }
        }
      } else {
        inputLIstOl.elements[i].style.boxShadow = '0 0 0 1px #f0143d';
        $('#error__ol').text('invalid value');
        flagErrorOl = false;
      }
      //list ol reset
      $('#reset-ol').on('click', function () {
        for (let i = 0; i < inputLIstOl.elements.length; i++) {
          inputLIstOl.elements[i].value = '';
          inputLIstOl.elements[i].style.boxShadow = '';
        }
        $('#error__ol').html('');

      })
    }
  });

  //  list ol create
  function createListOl() {
    let ListOl = document.createElement('ol');
    ListOl.style.listStyleType = inputLIstOl.elements[1].value;

    for (let j = 1; j <= inputLIstOl.elements[0].value; j++) {
      let li = document.createElement('li');
      li.innerHTML = `item ${j}`;
      ListOl.appendChild(li);
    }
    $('#content').append($(ListOl));
    $('#textarea').text($('#content').html());
  }

  //list ol close
  $('.close__box_create').on('click', function () {
    $('#create__list-ol').css('top', '');
    $('#textarea').css('background', '');
    for (let i = 0; i < inputLIstOl.elements.length; i++) {
      inputLIstOl.elements[i].value = '';
      inputLIstOl.elements[i].style.boxShadow = '';
    }
    $('#error__ol').html('');
  });


//------------------Function Button List UL------------------

  $('#btn__list-ul').on('click', function () {
    $('#create__list-ul').css('top', '23px');
    $('#textarea').css('background', 'rgba( 0, 0, 0, .40)');
  });


  // list ul create
  let inputLIstUl = document.forms['createListUl'];
  $('#btn__create-ul').on('click', function () {
    // list ul error
    let flagErrorUl = true;
    for (let i = 0; i < inputLIstUl.elements.length; i++) {

      if (inputLIstUl.elements[i].value != '') {
        inputLIstUl.elements[i].style.boxShadow = '';
        if (flagErrorUl) {
          $('#error__ul').text('');
          flagErrorUl = true;
          if (i == 1) {
            createListUl()
          }
        }

      } else {
        inputLIstUl.elements[i].style.boxShadow = '0 0 0 1px #f0143d';
        $('#error__ul').text('invalid value');
        flagErrorUl = false;
      }
      //list ul reset
      $('#reset-ul').on('click', function () {
        resetUl(i)
      });

    }

  });

  // list ol create
  function createListUl() {
    let ListUl = document.createElement('ul');
    ListUl.style.listStyleType = inputLIstUl.elements[1].value;
    for (let j = 1; j <= inputLIstUl.elements[0].value; j++) {
      let li = document.createElement('li');
      li.innerHTML = `item ${j}`;
      ListUl.appendChild(li);
    }
    $('#content').append($(ListUl));
    $('#textarea').text($('#content').html());
  }

  //list ul reset
  function resetUl(i) {
    inputLIstUl.elements[i].value = '';
    inputLIstUl.elements[i].style.boxShadow = '';
    $('#error__ul').html('');
  }

  //list ul close
  $('.close__box_create').on('click', function () {
    $('#create__list-ul').css('top', '');
    $('#textarea').css('background', '');
    for (let i = 0; i < inputLIstUl.elements.length; i++) {
      inputLIstUl.elements[i].value = '';
      inputLIstUl.elements[i].style.boxShadow = '';
    }
    $('#error__ul').html('');
  });

});
