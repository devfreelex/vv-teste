const formatBrl = (value = 0) => {

    let price = value.toString();
    
    price = price.replace(/[\D]+/g,'');
    price = price.replace(/([0-9]{2})$/g, ",$1");

    if (price.length > 6) {
        price = price.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    return price
    
}

const formatNumber = (value = 0) => {
    
    let price = value.toString();
    
    price = price.replace(/[\D]+/g,'');
    price = price.replace(/([0-9]{3}),([0-9]{2}$)/g, "$1.$2");    

    return parseFloat(price)
}

export  {formatBrl, formatNumber}