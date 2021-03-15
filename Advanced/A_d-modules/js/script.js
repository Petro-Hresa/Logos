const querySell = x => document.querySelector(x);

// Function creat Products value

(function Products(){
       
    const PRODUCTSvalue = document.forms['products'];
    const PRODUCTSadd = document.forms['payProduct'];

    function LoopProductsValue(){

        for(let i = 0; i < PRODUCTSvalue.length; i++ ){
              
            let sliceProductsValue =  PRODUCTSvalue[i].value.slice(0, `${PRODUCTSvalue[i].value.lastIndexOf(' ')}`);
       
            if(sliceProductsValue <= 0){
                alert("Dosen't have product")
            }
        };
    };

  
    
    
    PRODUCTSadd.btnAdd.onclick = function(){

        let PRODUCTSaddNumber = PRODUCTSadd.number;
        PRODUCTSadd.productAdd.forEach(product =>{

            if(product.checked ){
                LoopProductsValue()
                creatList(product, PRODUCTSaddNumber)
              
            }
        })
    }
    

})();


function creatList(product, PRODUCTSaddNumber){



    if(PRODUCTSaddNumber.value != '' && product.checked){

       const creatListProducts = document.createElement("li");
       creatListProducts.innerText = `${product.value}: ${PRODUCTSaddNumber.value} шт`;
       querySell('.list__products').appendChild(creatListProducts)
    //    console.log(creatListProducts)

    }

}

