const querySell = x => document.querySelector(x);

// Function creat Products value

(function Products(){
       
    const PRODUCTSvalue = document.forms['products'];
    let i;
    for( i = 0; i < PRODUCTSvalue.length; i++ ){

        PRODUCTSvalue[i] == PRODUCTSvalue[0] ? `${PRODUCTSvalue[i].value += ' грн'}` : `${PRODUCTSvalue[i].value += " шт"}`;
    };


    const PRODUCTSadd = document.forms['payProduct'];
    PRODUCTSadd.btnAdd.onclick = function(){

        let PRODUCTSaddNumber = PRODUCTSadd.number;
        PRODUCTSadd.productAdd.forEach(product =>{

            if(product.checked )creatList(product, PRODUCTSaddNumber)
        })
    }
    

})();


function creatList(product, PRODUCTSaddNumber){

    if(PRODUCTSaddNumber.value != '' && product.checked){

       const creatListProducts = document.createElement("li");
       creatListProducts.innerText = `${product.value}: ${PRODUCTSaddNumber.value} шт`;
       querySell('.list__products').appendChild(creatListProducts)
       console.log(creatListProducts)
    }

}

