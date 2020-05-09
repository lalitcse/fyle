let p_price = document.getElementById('pop_price')
let p_serving = document.getElementById('p_serving')
let ice_price = document.getElementById('ice_price')
let ice_serving = document.getElementById('ice_serving')
let save_money = document.getElementById('save_money')
let temp_flag = 100;

const giveCardDataMonth = (serve) =>{
    p_price.innerHTML = `$${serve}`
    p_serving.innerHTML = `For ${serve}  serving`
    ice_price.innerHTML = `$${serve*2}`
    ice_serving.innerHTML = `For ${serve}  serving`
    save_money.innerHTML = `$${serve}`
}

const giveCardDataYear = (serve) =>{
    p_price.innerHTML = `$${serve/2}`
    p_serving.innerHTML = `For ${serve}  serving`
    ice_price.innerHTML = `$${(serve*2)/2}`
    ice_serving.innerHTML = `For ${serve}  serving`
    save_money.innerHTML = `$${serve-(serve/2)}`
}

const changeServing = (serving) => {
    temp_flag = serving
    if($('.input_check').is(':checked') == true){
        giveCardDataMonth(serving)
    }else{
        giveCardDataYear(serving)
    }
}

const monthYearChange = () =>{
    if($('.input_check').is(':checked') == true){
        giveCardDataMonth(temp_flag)
    }else{
        giveCardDataYear(temp_flag)
    }
}


