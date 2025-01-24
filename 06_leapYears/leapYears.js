const leapYears = function(year) {
    const isDivisiblebyFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;

    if(isDivisiblebyFour && !isCentury || isDivisibleByFourHundred) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

//Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
