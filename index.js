// Code your solution in this file!

const logDriverNames = (driver) => {
  driver.forEach(function(element){
    console.log(element.name)
  });
}

const logDriversByHometown = (driver, home) => {
  driver.forEach(function(element){
    if (element.hometown === home){
      console.log(element.name)
    }
  })
}

const driversByRevenue = (drivers) => {

  return drivers.sort(function (a,b){
    return a.revenue - b.revenue;
  })
}

const driversByName = (drivers) => {
  let g = drivers.sort(function (a,b){
    if (a.name < b.name){
      return -1;
    }
    if (a.name > b.name){
      return 1
    }
  })
  return g;
}

const totalRevenue = (drivers) => {
  const h = []

    const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  }

  drivers.forEach(function(element){
   h.push(element.revenue);
  })

  return h.reduce(reducer);
}

const averageRevenue = (drivers) => {

  let g = totalRevenue(drivers)

  return g / 5

}

// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ];
