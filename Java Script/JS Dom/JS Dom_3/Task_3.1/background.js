let qurSell = x => document.querySelector(x);
let boxBody = qurSell('#body');

//===================== function Background color============================
let color = qurSell('#color');
let click = true;
let arrColors = ['Turquoise','DarkRed','LawnGreen','SeaGreen','Silver','Red','Blue','Purple','Chocolate'];
color.onclick =function(){
   color.style.border = '1px solid Teal';
   color.style.color = 'Gold';
   color.style.width = '60px';
   images.style.border = 'none';

      let wrap = document.createElement('div');
          wrap.classList.add('wrapDiv');
          boxBody.appendChild(wrap);

  for(let i = 0; i < arrColors.length; i++){
      let boxColor = document.createElement('div');
          boxColor.classList.add('boxColor');
          boxColor.style.background = arrColors[i];
          wrap.appendChild(boxColor);
          boxColor.onclick =()=>{document.body.style.background = arrColors[i]};
  };
};

//========================function Background Image============================
let images = qurSell('#images');
let arrImg =[
  'https://f.vividscreen.info/soft/a1b3e9d06bc955a73051a1d888ad83ae/Google-Logo-1920x1200.jpg', 'https://tehnot.com/wp-content/uploads/2018/05/264327.jpg',
  'https://avatars.mds.yandex.net/get-pdb/1531580/d579aceb-5c3c-455e-b044-1c1c6a50bb52/s1200?webp=false',
  'https://telegraf.com.ua/files/2019/06/p_55197930-388x206.jpg',
  'https://img4.postila.ru/storage/8512000/8500044/a515b4eb1727de8f379c61346a165984.jpg',
  'https://2hpc.ru/wp-content/uploads/2015/11/image-5.jpg',
  'https://cdn-media-1.freecodecamp.org/images/1*uIepZ6YWTubeVxD5n5kkyg.png',
  'https://upload.wikimedia.org/wikipedia/uk/4/4c/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%BF%D1%96%D0%B4_%D0%9F%D0%B8%D0%BB%D1%8F%D0%B2%D1%86%D1%8F%D0%BC%D0%B8.jpg',
  'https://www.5.ua/media/pictures/original/180765.jpg'
];
images.onclick =()=>{
  color.style.border = 'none';
  images.style.border = '1px solid Teal';
  images.style.color = 'Gold';
  images.style.width = '80px';

      let wrap = document.createElement('div');
          wrap.classList.add('wrapDiv');
          boxBody.appendChild(wrap);

  for(let i = 0; i < arrImg.length; i++){
      let boxColor = document.createElement('div');
          boxColor.classList.add('boxColor');
          boxColor.style.background = `url(${arrImg[i]}) center no-repeat `;
          wrap.appendChild(boxColor);

          boxColor.onclick =()=>{
             document.body.style.background = `url(${arrImg[i]}) center no-repeat`;
             document.body.style.backgroundSize = 'cover';
             document.body.style.backgroundAttachment = 'fixed';
    }
  }
};
