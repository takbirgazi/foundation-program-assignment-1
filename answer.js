// Question 1
function describeValue(value) {

    return `${typeof value} | ${value ? 'truthy' : 'falsy'}`;
}


// Question 2
function getDayType(value) {

    if (value === 'Friday' || value === 'Saturday') {
        return 'Weekend';
    } else if (value === 'Sunday' || value === 'Monday' || value === 'Tuesday' || value === 'Wednesday' || value === 'Thursday') {
        return 'Working Day';
    } else {
        return 'Invalid Day';
    }
}


// Question 3
function validateUsername(username) {

    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}


// Question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {

    let total = 0;
    const nightCharge = isNight ? 0.20 : 0;
    const waitingCharge = waitingMinutes > 0 ? waitingMinutes * 2 : 0;


    if (distance > 2) {
        const distanceFare = distance - 2;
        const totalDistance = distanceFare * 15 + 50;
        const distanceWithWaiting = totalDistance + waitingCharge;

        total = distanceWithWaiting + (distanceWithWaiting * nightCharge);
    } else {
        const distanceWithWaiting = 50 + waitingCharge;

        total = distanceWithWaiting + (distanceWithWaiting * nightCharge);
    }
    return total;
}

// Question 5

const getChaseVerdict = (target, scored, ballsLeft) => {

    if ((target - scored) <= 0) {
        return "Won";
    } else {
        const runsNeeded = target - scored;
        const needPerOver = (runsNeeded / ballsLeft) * 6;

        if (((target - scored) >= 0) && ballsLeft <= 0) {
            return "Lost";
        } else if (needPerOver < 6) {
            return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
        } else if (needPerOver > 6 & needPerOver < 12) {
            return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
        }
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }

}

console.log(getChaseVerdict(100, 90, 0));