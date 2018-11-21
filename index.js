// Code your solution in this file

const logDriverNames = function (array) {
    array.forEach(function (driver) {
        console.log(driver.name)
    });
}

const logDriversByHometown = function (array, town) {
    array.forEach(function (driver) {
        if (driver.hometown == town)
        console.log(driver.name)
    });
}

const driversByRevenue = function (array) {
    const newArray = [...array].sort(function (a,b) {
        return a.revenue - b.revenue
    });
    return newArray;
}

const driversByName = function (array) {
    const newArray = [...array].sort(function (a,b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    return newArray;
}

const totalRevenue = function (array) {
    let totalRev = 0;
    array.forEach(function (driver) {
        totalRev += driver.revenue;
    });
    return totalRev;
}

const averageRevenue = function (array) {
    return (totalRevenue(array)/array.length);
}

