// Code your solution in this file!
function logDriverNames(objects) {
    objects.filter( object => console.log(object.name) )
}

function logDriversByHometown(objects, location) {
    objects.filter(function(object) {
        if (object.hometown === location){
            console.log(object.name)
        }
    })
}

function driversByRevenue(objects) {
    newobjects = [...objects]
    return newobjects.sort( function(a,b) {
        return a.revenue - b.revenue
    })
}

function driversByName(objects) {
    newobjects = [...objects]
    return newobjects.sort(function(a,b) {
        return (a.name).localeCompare((b.name))
    })
}

function totalRevenue(objects) {
    return objects.reduce(function(acc, val) {
        return acc + val.revenue
    }, 0)
}



function averageRevenue(objects) {
    return totalRevenue(objects)/objects.length
}


