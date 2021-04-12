const querySell = x => document.querySelector(x);


  export const PRODUCTSBALANCE = document.forms['productsBalance'];
         const PRODUCTSAMOUNT = document.forms['productBuy'];


   // Add Products  
  PRODUCTSAMOUNT.buttonAdd.onclick = function(){

        let productSelect = PRODUCTSAMOUNT.productSelect;
       
        for(let i = 0; i < productSelect.length; i++ ){
         
            if(PRODUCTSAMOUNT.number != '' && productSelect[i].checked){

                for(let b = 0; b < PRODUCTSBALANCE.length; b++ ){

                    if(productSelect[i].value == PRODUCTSBALANCE[b].name ){

                        let numberFromValue =  PRODUCTSBALANCE[b].value.slice(0, `${PRODUCTSBALANCE[b].value.lastIndexOf(' ')}`);

                        if(+numberFromValue < +PRODUCTSAMOUNT.number.value)errorAvailabilityProduct()
                          
                        else{

                            let minusBalanceProducts = numberFromValue - +PRODUCTSAMOUNT.number.value;
                            PRODUCTSBALANCE[b].value = minusBalanceProducts + ' шт';
                            creatList(productSelect[i].value ,PRODUCTSAMOUNT.number.value);
                        }
                    
                    }

                }
                objProductsAdd[productSelect[i].value] = PRODUCTSAMOUNT.number.value;
                productSelect[i].checked = false;
                PRODUCTSAMOUNT.number.value = '';
            }
          

        }

    }
       

    // Create List Products
    function creatList(product, productNumber){

        const creatListProducts = document.createElement("li");
    
           creatListProducts.innerText = `${product}: ${productNumber} шт`;
           querySell('.list__products').appendChild(creatListProducts);
    
    }


   // Create Error Availability Product 
    function errorAvailabilityProduct(){
        let creatError = document.createElement('div');
        creatError.classList.add('errorProducts');
        creatError.innerText = `Sorry but in the storage dosen\'t has ${PRODUCTSAMOUNT.number.value} products`;
        querySell('.block_error').appendChild(creatError);

        setTimeout(function(){
            creatError.style.display = 'none';
        } , 2000)

    }


 
    PRODUCTSAMOUNT.buttonBuy.addEventListener("click", calkProduct);
    PRODUCTSAMOUNT.buttonBuy.addEventListener("click", addListInBlockPurchase); 
    function addListInBlockPurchase(){
       
        let listProductChildren = querySell('.list__products').children;

        for(let i = 0; i < listProductChildren.length; i++){
         querySell('.block__purchase').appendChild(listProductChildren[i]);
        }
 
    }


import{
    calkProduct,
    objProductsAdd
}from './calkProducts.js';







