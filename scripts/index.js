console.log(`There are ${characters.length} characters in the array.`);

function findNamesStartA() {
    let names = characters;
    let namesArray = []
    characters.forEach(function (chars) {
        let fullName = (chars.name);
        if (fullName.startsWith('A')) {
            namesArray.push(fullName)
        }
    })
    console.log(namesArray.length)
}
findNamesStartA()

function findNamesStartZ() {
    let names = characters;
    let namesArray = []
    characters.forEach(function (chars) {
        let fullName = (chars.name);
        if (fullName.startsWith('Z')) {
            namesArray.push(fullName)
        }
    })
    console.log(namesArray.length)
}
findNamesStartZ()

function isDead() {
    let chars = characters;
    let deadCharsArray = [];
    chars.forEach(function (charAlive) {
        let alive = (charAlive.died);
        // console.log(alive)
        if (alive !== "") {
            deadCharsArray.push(chars)
        }
    })
    console.log(deadCharsArray.length)
}
isDead()