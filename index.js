// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}   

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i){
    return (fare) => {
        return fare*i
    }
}

const fareDoubler = (fare) =>{
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) =>{
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, f){
    if (f === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else {
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}