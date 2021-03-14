
export function calcProducts(){
	let calcPrice = 0
	
	for(const key in objList){

		for (let i = 0; i < products.length; i++){
		
			if(key === products[i].name){

				let math =  arrValueProducts[i] - objList[key];
				arrValueProducts[i] =  math;
                
				
                
				calcPrice += objList[key] * arrPriceProducts[i-1];
				arrValueProducts[0] += calcPrice;
				
				if(arrValueProducts[i] <= -1){
				  alert('dont have product')
				  showDataProducts.innerHTML = '';

				}else{
				  createValueProducts();
                  addToViews(calcPrice);
				  let createLISum = document.createElement("li");
				  createLISum.innerText = `Загальна сума покупки: ${calcPrice} грн`;
				  document.querySelector('.block__views').appendChild(createLISum)
				}

				
			}


		}


	}


    // console.log(calcPrice)
	

}



import{
	products,
	objList,
	arrValueProducts,
	createValueProducts,
	arrPriceProducts,
	addToViews,
	showDataProducts
}from './script.js';