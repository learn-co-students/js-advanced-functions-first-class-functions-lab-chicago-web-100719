const returnFirstTwoDrivers = function(drivers) {
    let firsttwo = [drivers[0], drivers[1]]
    return firsttwo
}

const returnLastTwoDrivers = function(drivers) {
    let lasttwo = drivers.slice(-2)
    return lasttwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler =  createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arr, driverfnct) {
    return driverfnct(arr)
}