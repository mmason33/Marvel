module.exports = (limit, quanity) => {
    const integersList = [];
    let current;

    for (var i = 0; i < quanity; i += 1) {
        min = Math.ceil(0);
        max = Math.floor(limit);
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!integersList.includes(randomInt)) {
            integersList.push(randomInt);
        } else {
            quanity += 1;
        }

        current = randomInt;
    }

    return integersList;
};