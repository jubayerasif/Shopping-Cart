function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
     else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1910;
    const caseTotal = getInputValue('case') *  49;
    const subTotal = phoneTotal +caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // Html gets updated
    document.getElementById('sub-total').innerHTML = subTotal;
    document.getElementById('tax-amount'). innerHTML = tax;
    document.getElementById('total-price'.innerHTML = totalPrice;)
}