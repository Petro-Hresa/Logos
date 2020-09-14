
//Styles for page
document.body.style.background = prompt('Enter the background of the page');
document.body.style.fontFamily = prompt('Enter font type for the page');

//Style for title
document.getElementsByTagName('h1')[0].style.textAlign = prompt('Enter the position of the title');

//Styles for paragraph
let paragraph = document.getElementsByTagName('p')[0];
    paragraph.style.background = prompt( 'Enter a background paragraph');
    paragraph.style.color = prompt('Enter color of the paragraph text');

// Style for links
let  colorPower = document.getElementsByTagName('a');
for(let i = 0; i < colorPower.length; i++)colorPower[i].style.color = prompt('Enter color of the links');

//Styles for div
let tegDiv = document.querySelector('div');
    tegDiv.style.color = prompt('The color of text in the div');
    tegDiv.style.fontSize = `${prompt('Font size in the div')}px`;
    tegDiv.style.fontWeight= prompt('Font thickness in the div');

//Style for list
let a = document.getElementsByTagName('ul');
for(let i = 0; i< a.length;i++) a[i].style.listStyle =  prompt('Enter style of the list');





