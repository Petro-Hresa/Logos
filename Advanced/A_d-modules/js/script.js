const querySell = x => document.querySelector(x);

// Function creat Products value


(function Products(){
       
    const PRODUCTSBalance = document.forms['ProductsBalance'];
    const PAYProducts = document.forms['payProduct'];

    




    // function AvailabilityProducts(i = 0){

    //     for( ;i < PRODUCTSBalance.length; i++ ){
              
          
    //     };
    // };
    
    
    {
        AvailabilityProducts(i)
        let sliceProductsValue =  PRODUCTSBalance[i].value.slice(0, `${PRODUCTSBalance[i].value.lastIndexOf(' ')}`);
        
        if(sliceProductsValue <= 0){
            alert("Dosen't have product")
        }
        
    }
    







    // function AvailabilityProducts(){

    //     for(let i = 0; i < PRODUCTSBalance.length; i++ ){
              
    //         let sliceProductsValue =  PRODUCTSBalance[i].value.slice(0, `${PRODUCTSBalance[i].value.lastIndexOf(' ')}`);
       
    //         if(sliceProductsValue <= 0){
    //             alert("Dosen't have product")
    //         }
    //     };
    // };

  
    
    
    PAYProducts.btnAdd.onclick = function(){

        let addNumberProduct = PAYProducts.number;
        PAYProducts.productAdd.forEach(product =>{

            if(product.checked ){

                AvailabilityProducts()
                creatList(product, addNumberProduct)
              
            }
        })
    }
    

})();


function creatList(product, addNumberProduct){

    const creatListProducts = document.createElement("li");

    if(addNumberProduct.value != '' && product.checked){

       creatListProducts.innerText = `${product.value}: ${addNumberProduct.value} шт`;
       querySell('.list__products').appendChild(creatListProducts)
    //    console.log(creatListProducts)

    }

}

