// console.log(`There are ${characters.length} characters in the array.`);

// function findNamesStartA() {
//     let names = characters;
//     let namesArray = []
//     characters.forEach(function (chars) {
//         let fullName = (chars.name);
//         if (fullName.startsWith('A')) {
//             namesArray.push(fullName)
//         }
//     })
//     console.log(namesArray.length)
// }
// findNamesStartA()

// function findNamesStartZ() {
//     let names = characters;
//     let namesArray = []
//     characters.forEach(function (chars) {
//         let fullName = (chars.name);
//         if (fullName.startsWith('Z')) {
//             namesArray.push(fullName)
//         }
//     })
//     console.log(namesArray.length)
// }
// findNamesStartZ()

// function isDead() {
//     let chars = characters;
//     let deadCharsArray = [];
//     chars.forEach(function (charAlive) {
//         let alive = (charAlive.died);
//         // console.log(alive)
//         if (alive !== "") {
//             deadCharsArray.push(chars)
//         }
//     })
//     console.log(deadCharsArray.length)
// }
// isDead()

function mostTitles(characters) {
    let titlesLengthArray = []
    noTitle = [""]
    characters.forEach(function (person) {
        console.log(person.titles);
        if (person.titles[0] !== noTitle) {
            titlesLengthArray.push(person.titles);
        }    
    });
    // titleLengthArray.forEach(function (person) {

    // })
    // if titleLengthArray.length > 0) {

    // }
    console.log(titlesLengthArray)
}



function whoIsHotPie(characters) {
    const arrayOfHotPies = characters.filter(function (person) {
        return person.name === person.name;
    });
    if (arrayOfHotPies.length > 0) {
        const hotPie = arrayOfHotPies[0];
        return hotPie.playedby;
    } else {
        return "no hot pie found"
    }
}

function findActorFor2(characters, characterName) {
    const theCharacter = character.find()
}

function createHouseHistogram(characters) {
    const histogram = {};

    characters.forEach(function (person) {
        // console.log(person.allegiances);
        person.allegiances.forEach(function (house) {
            // do something with the house
            if (histogram[house] !== undefined) {
                histogram[house] += 1;
            } else {
                histogram[house] = 1;
            }
        });
    });
    return histogram;
}

function createHouseHistogram2(characters) {
    const histogram = new Map();
    characters.forEach(function (person) {
        person.allegiances.forEach(function (house) {
            if (histogram.has(house)) {
                histogram.set(house, currentValue +1);
            } else {
                histogram.set(house, 1);
            }
        });
    });
}