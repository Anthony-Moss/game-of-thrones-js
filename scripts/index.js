console.log(`There are ${characters.length} characters in the array.`);

function findNamesStartA() {
    let names = characters;
    let namesArray = []
    characters.forEach(function (chars) {
        let fullName = (chars.name);
        if (fullName.startsWith('A')) {
            namesArray.push(fullName)
        }
    // console.log(namesArray.length)
    })
    console.log(namesArray.length)
}
findNamesStartA()

