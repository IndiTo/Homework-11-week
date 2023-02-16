let items = document.querySelectorAll('.item');
    let inputSumm = document.querySelector('.summ');
    

const summPrice = () => {
    let summ = parseInt(inputSumm.value);
    items.forEach((item)=>{
        summ = summ+parseInt(item.getAttribute('value'))
    })
    inputSumm.setAttribute('value', summ)
}
summPrice();

function setDiscount(price) {
    return Math.round(price * 0.8);
}

const applyDiscount = () => {
    items.forEach((item)=>{
        let oldPrice = parseInt(item.getAttribute('value'));
        let newPrice = setDiscount(oldPrice);
        item.innerHTML = `<div class = "item">${newPrice} тг.</div>`
    })
    let newSumPrice = setDiscount(inputSumm.value);
    inputSumm.value = newSumPrice;
}

