// Code your solution in this file!
const returnFirstTwoDrivers = array => array.slice(0,2)
const returnLastTwoDrivers = array => array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (integer) => (fare) => integer * fare

const fareDoubler = fare =>createFareMultiplier(2)(fare)

const fareTripler = fare => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) =>returnFirstTwoDrivers(drivers)

















