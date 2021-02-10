const input = document.getElementById('waterinput');

const output = document.getElementById('coffeeAmount');

input.addEventListener('change',getWaterAmount);

function getWaterAmount(){
    let inputValue = input.value;
    if(!isNaN(inputValue)){
        let finalAmount = coffeeRatio(inputValue);
        output = output.innerHTML = `${finalAmount} Grams of coffee`;
    }
    output = output.innerHTML = "Not a number ";
    
}

function coffeeRatio(pWaterAmount){
    let coffeePerGram = 0.06;

    return pWaterAmount * coffeePerGram;
}

