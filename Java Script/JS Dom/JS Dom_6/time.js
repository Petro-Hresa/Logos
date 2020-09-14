let qurSell = x => document.querySelector(x);

//=======================Functions Box Upper UCL=================================
//Function DATE
addDate();
function addDate(){
  let date = new Date();
  let getDate = date.getDate();
  let getMonth = date.getMonth()+1;
  let getFullYear = date.getFullYear();
  if(getDate <= 9) getDate = '0' + getDate;
  if(getMonth <= 9) getMonth = '0' + getMonth;
  qurSell('#date').innerHTML = `${getDate}.${getMonth}.${getFullYear}`
}

let time =  qurSell('#time');
for(let i = 0; i < time.children.length;i++) time.children[i].classList.add('box__time');

//Function TIME
setInterval(function (){
  let dateHours = new Date();
  let getHours = dateHours.getHours();
  let getMinutes = dateHours.getMinutes();
  let getSeconds = dateHours.getSeconds();

  if(getHours <= 9) getHours = '0'+ getHours;
  if(getMinutes <= 9) getMinutes = '0'+ getMinutes;
  if(getSeconds <= 9) getSeconds = '0'+ getSeconds;

  qurSell('#time__hours').innerHTML = getHours;
  qurSell('#time__minutes').innerHTML = getMinutes;
  qurSell('#time__seconds').innerHTML = getSeconds;

},1000);

//====================== Functions Box Center UCL===================================
// ------------------Create Stopwatch------------------
let stopwatch =  qurSell('.stopwatch');
for(let i = 0; i < stopwatch.children.length;i++) {
  if( stopwatch.children[i] != stopwatch.children[1] &&
      stopwatch.children[i] != stopwatch.children[3] &&
      stopwatch.children[i] != stopwatch.children[5]){
      stopwatch.children[i].classList.add('box__time', 'stopwatch__items');
  }
  if( stopwatch.children[i] == stopwatch.children[6]) stopwatch.children[6].style.width = '70px';
}

// Function START stopwatch
let startTime;
qurSell('#btn-stopwatch__start').onclick =()=>{ startTime = setInterval(timeStopwatch,10);};

// Function STOP stopwatch
qurSell('#btn-stopwatch__stop').onclick =()=>{
  clearInterval(startTime);
  // Function LOOP stopwatch
  qurSell('#btn-stopwatch__loop').onclick = function(){
    let wrapSaveTime = document.createElement('div');
        wrapSaveTime.style.marginTop = '10px';
        wrapSaveTime.innerHTML = hOut+' : '+mOut+' : '+sOut+' : '+msOut ;
    if( msOut > 0) qurSell('#save-stopwatch').appendChild(wrapSaveTime);
  };
};

//Function CREATE TIME stopwatch
let ms = 0, s = 0, m = 0, h = 0;
let msOut , sOut , mOut  , hOut ;
  function timeStopwatch(){
    msOut = msTime(ms);
    sOut  = checkTime(s);
    mOut  = checkTime(m);
    hOut  = checkTime(h);
    ms = 10+ms;
    if(ms === 1000){
      ms = 0;
      s = ++s;
    }
    if(s === 60){
      m = ++m;
      s = 0;
    }
    if(m === 60){
      m = 0;
      h = ++h;
    }
    qurSell("#stopwatch__milliseconds").innerHTML = msOut;
    qurSell("#stopwatch__seconds").innerHTML = sOut;
    qurSell("#stopwatch__minutes").innerHTML = mOut;
    qurSell("#stopwatch__hours").innerHTML = hOut;
  }

  //Function ADD-0
  function checkTime(i){
    if(i < 10){  i = '0'+ i;}
    return i;
  }
  function msTime(i){
    if(i < 100){  i = '0'+ i;}
    return i;
  }

// Function RESET stopwatch
qurSell('#btn-stopwatch__reset').onclick = function reset(){
  qurSell("#stopwatch__milliseconds").innerHTML = '000' ;
  qurSell("#stopwatch__seconds").innerHTML = '00' ;
  qurSell("#stopwatch__minutes").innerHTML = '00';
  qurSell("#stopwatch__hours").innerHTML ='00';
  qurSell('#save-stopwatch').innerHTML = '';
};

//======================Functions Box Lower UCL===================================
//-------Function Minutes---------
let minutes = qurSell('#minutes').innerHTML;
//Function Plus
qurSell('#plus__btn').onclick =()=>{
  (minutes >= 59) ? minutes = 0 : minutes++;
  if(minutes < 10) minutes = '0' + minutes;
  qurSell('#minutes').innerHTML = minutes;
};

//Function Minus
qurSell('#minus__btn').onclick =()=>{
  (minutes <= 0) ? minutes = 59 : minutes--;
  if(minutes < 10) minutes = '0' + minutes;
  qurSell('#minutes').innerHTML = minutes;
};

//-----------Function Timer-------------
let timerSeconds = 60;
function timer(){

  if(timerSeconds <= 0){
     timerSeconds = 59;
     minutes--;
    if( minutes < 10)minutes = '0'+  minutes;
  } else timerSeconds--;

  if( minutes == 0 && timerSeconds == 0) clearInterval( startTimerInterval);
  if(timerSeconds < 10)timerSeconds = '0'+timerSeconds;
  qurSell('#timer__minutes').innerHTML = minutes;
  qurSell('#timer__seconds').innerHTML = timerSeconds;
}

//Function  Timer start
let startTimerInterval;
qurSell('#timer__btn_start').onclick = function(){
  startTimerInterval = setInterval(timer,1000);
};

//Function  Timer stop
qurSell('#timer__btn_stop').onclick = function(){
  clearInterval( startTimerInterval);
};

//Function  Timer reset
qurSell('#timer__btn_reset').onclick = function(){
  timerSeconds = 60;
  qurSell('#timer__minutes').innerHTML = '00';
  qurSell('#timer__seconds').innerHTML = '00';
};
