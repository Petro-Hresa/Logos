
let greeting='Welcome,';
let name = prompt('Your Name');
let widthFirst = +prompt('Enter width first box');
let heightFirst = +prompt('Enter height first box');
let backgroundFirst = prompt('Enter background color the first boxing');
let widthSecond = +prompt('Enter width second box');
let heightSecond = +prompt('Enter height second box');
let backgroundSecond = prompt('Enter background second boxing');

document.write(`<div style="margin: 0 auto; 
                            width: ${widthFirst}px; 
                            height: ${heightFirst}px; 
                            background: ${backgroundFirst};
                            display:flex;
                            flex-direction:column;
                            justify-content:center;
                            align-items:center;">
                            <div style="width:${widthSecond}px; 
                                        height:${heightSecond}px;
                                         ">
                                      <img src="${backgroundSecond}"width="100%" height="100%" alt="" >
                            </div>    
                            <p style="font-size:20px; 
                                      color:red"><b>  ${ greeting}  ${name }  </b>
                            </p>
              </div>`);



