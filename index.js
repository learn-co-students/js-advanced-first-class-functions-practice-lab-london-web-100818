// Code your solution in this file!

const newCallback = function(attr){
    return function(el, i, arr){
        console.log(el[attr]);
    }
}

function logDriverNames(array){
    array.forEach(newCallback("name"));
}

function logDriversByHometown(array, town){
    array.filter(function(element){return element.hometown === town}).forEach(newCallback("name"));
}

function driversByRevenue(array){
    newArray = array.slice();
    return newArray.sort(revenueSort);
}

const revenueSort = function(driver1, driver2){
    return  driver1.revenue - driver2.revenue;
}

function driversByName(array){
    newArray = array.slice()
    return newArray.sort(nameSort);
}

const nameSort = function(driver1, driver2){
    return (driver1.name).localeCompare(driver2.name);
}

function totalRevenue(array){
    return array.reduce(revenueTotal,0);
}

const revenueTotal = function(agg, el, i, arr){
    return agg + el.revenue;
}

function averageRevenue(array){
    return totalRevenue(array)/array.length;
}


