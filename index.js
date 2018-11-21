function logDriverNames(drivers) {
  drivers.forEach(
    function(x){
      console.log(x.name)
    })
    }
function logDriversByHometown(drivers,argument) {
  drivers.forEach(function(x){
    if(x.hometown==argument){
          console.log(x.name)
    }
  })
}

function driversByRevenue(drivers) {
  newArray=drivers.slice()
  newArray.sort(function(a, b){
    return a.revenue-b.revenue;
  })
  return newArray
}

function driversByName(drivers) {
  newArray=drivers.slice()
  newArray.sort(function(a, b){
    return a.name.localeCompare(b.name);
  })
  return newArray
}
function totalRevenue(drivers) {
  let total=0
  drivers.forEach(function(x){
    total+=x.revenue
  })
  return total
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
