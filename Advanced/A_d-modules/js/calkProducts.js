
export const objProductsAdd = {};

export const objProductsPrice = {
    Beer: 25,
    Vine: 90,
    Pepsi: 30
};

export function calkProduct(){
       
    for(let i in objProductsAdd){
    
        for(let p in objProductsPrice){
            
            if(i === p){
            let sliceProductsNumber0 =  PRODUCTSBALANCE[0].value.slice(0, `${PRODUCTSBALANCE[0].value.lastIndexOf(' ')}`);
            let sumProduct = +objProductsAdd[i] * +objProductsPrice[p];
            PRODUCTSBALANCE[0].value = +sliceProductsNumber0 +  +sumProduct + ' грн'
            
            }

            
            
        }

        if(objProductsAdd.hasOwnProperty(i)) delete objProductsAdd[i];
        
    }

}
    

import{
    PRODUCTSBALANCE
}from './script.js';
