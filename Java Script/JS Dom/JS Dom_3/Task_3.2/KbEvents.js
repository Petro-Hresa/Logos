let getSel = x => document.querySelector(x);
let inputField = getSel('#input-field');
//===============Create Keyboard==========================
let keyboardsKeys =  getSel('.keyboards__keys');
let arrayKeys = [
  { keyName:'`',keyCode:192},
  { keyName:'1',keyCode:49},
  { keyName:'2',keyCode:50},
  { keyName:'3',keyCode:51},
  { keyName:'4',keyCode:52},
  { keyName:'5',keyCode:53},
  { keyName:'6',keyCode:54},
  { keyName:'7',keyCode:55},
  { keyName:'8',keyCode:56},
  { keyName:'9',keyCode:57},
  { keyName:'0',keyCode:48},
  { keyName:'-',keyCode:189},
  { keyName:'=',keyCode:187},
  { keyName:'Backspace', keyCode:8},

  { keyName:'Tab',keyCode:9},
  { keyName:'Q',keyCode:81},
  { keyName:'W',keyCode:87},
  { keyName:'E',keyCode:69},
  { keyName:'R',keyCode:82},
  { keyName:'T',keyCode:84},
  { keyName:'Y',keyCode:89},
  { keyName:'U',keyCode:85},
  { keyName:'I',keyCode:73},
  { keyName:'O',keyCode:79},
  { keyName:'P',keyCode:80},
  { keyName:'[',keyCode:219},
  { keyName:']',keyCode:221},
  { keyName:'\\',keyCode:220},

  { keyName:'Caps Lock',keyCode:20},
  { keyName:'A',keyCode:65},
  { keyName:'S',keyCode:83},
  { keyName:'D',keyCode:68},
  { keyName:'F',keyCode:70},
  { keyName:'G',keyCode:71},
  { keyName:'H',keyCode:72},
  { keyName:'J',keyCode:74},
  { keyName:'K',keyCode:75},
  { keyName:'L',keyCode:76},
  { keyName:';',keyCode:186},
  { keyName:'\'',keyCode:222},
  { keyName:'Enter',keyCode:13},


  { keyName:'Shift',keyCode:16,flag:'ShiftLeft'},
  { keyName:'Z',keyCode:90},
  { keyName:'X',keyCode:88},
  { keyName:'C',keyCode:67},
  { keyName:'V',keyCode:86},
  { keyName:'B',keyCode:66},
  { keyName:'N',keyCode:78},
  { keyName:'M',keyCode:77},
  { keyName:',',keyCode:188},
  { keyName:'.',keyCode:190},
  { keyName:'/',keyCode:191},
  { keyName:'Shift',keyCode:16,flag:'ShiftRight'},

  { keyName:'SPACE',keyCode:32},
 ];


//Create buttons the keyboard
for(  let i = 0; i < arrayKeys.length; i++ ) {

      let createButton = document.createElement('button');
          createButton.innerText = arrayKeys[i].keyName;
      if(arrayKeys[i].flag != undefined) createButton.classList.add(arrayKeys[i].flag);
          createButton.classList.add('keyboard__key');
          keyboardsKeys.appendChild(createButton);

  document.addEventListener("keydown", (ev)=> {

    if (ev.keyCode == arrayKeys[i].keyCode) {
        inputField.style.fontSize = '20px';

      if(ev.keyCode == 16 && ev.code =='ShiftLeft') getSel(`.${ev.code}`).classList.add('keyboard');

      else if(ev.keyCode == 16 && ev.code == 'ShiftRight') getSel(`.${ev.code}`).classList.add('keyboard');

      else createButton.classList.add('keyboard');

      if (ev.keyCode == 9) {
          ev.preventDefault();
          inputField.value += '\t';
        }
    }
  });

  document.addEventListener("keyup", (ev)=>{
    if(ev.keyCode == arrayKeys[i].keyCode){
      createButton.classList.remove('keyboard');

      if(ev.keyCode == 20) {
        if (ev.getModifierState('CapsLock'))createButton.classList.add('keyboard');
        else  createButton.classList.remove('keyboard');
      }
    }
  });

  switch (arrayKeys[i].keyName) {

    case 'Backspace':
      createButton.style.padding = '0 10px';
      createButton.style.marginRight = 0;
    break;

    case 'Tab':
      createButton.style.padding = '0 44px';
    break;

    case '\\':
      createButton.style.marginRight = 0;
    break;

    case 'Caps Lock':
      createButton.style.padding = '0 25px';
    break;

    case 'Enter':
      createButton.style.padding = '0 28px';
      createButton.style.marginRight = 0;
    break;

    case 'Shift':
      createButton.style.padding = '0 60px';
      createButton.style.marginRight = 0;
    break;

    case 'Z':
      createButton.style.marginLeft = '8px';
    break;

    case 'SPACE':
      createButton.style.width = '100%';
      createButton.style.marginRight = 0;
    break;

  }
}



























