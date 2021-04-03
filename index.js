function distanceFromHqInBlocks (blocks) {
    if (blocks >= 43) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
};

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks (blocks)*264;
};

function distanceTravelledInFeet(beg, dest) {
    if (dest > beg) {
    return (dest - beg)*264;
 } else {
     return (beg - dest)*264;
 }
}

function calculatesFarePrice(beg, dest) {
    const distance = distanceTravelledInFeet(beg, dest);
    if (distance <= 400) {
        return 0;
    } else if (400 < distance && distance < 2000) {
        return 2.56;
    } else if (2000 < distance && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}