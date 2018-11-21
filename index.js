// Code your solution in this file!
const logDriverNames = drivers => {
  drivers.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = (drivers, location) => {
  drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = drivers => {
  return drivers.slice().sort( function(driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue
  })
}

const driversByName = drivers => {
  return drivers.slice().sort( function(driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = drivers => {
  return drivers.reduce(function(total, currentDriver) {
    return total + currentDriver.revenue
  }, 0)
}

const averageRevenue = drivers => {
  return totalRevenue(drivers) / drivers.length
}