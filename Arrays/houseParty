function houseParty(arr) {
    let namesList = []

    let listRequirements = {
        "is going!": (name, direction) => {

            (!namesList.includes(name)) ? namesList.push(name) : namesList.unshift(`${name} is already in the list!`)

        },

        "is not going!": (name, direction) => {

            (!namesList.includes(name)) ? namesList.unshift(`${name} is not in the list!`) : namesList.splice(namesList.indexOf(name), 1)

        }

    }


    function prepareGuest(value) {
        let name = value.split(" ")[0];
        let direction = value.split(" ").slice(1).join(" ");
        listRequirements[direction](name, direction)
    }
    
    arr.map(prepareGuest)

    return namesList.join("\n")

}


console.log(
    houseParty(
        ['Tom is going!',
            'Annie is going!',
            'Tom is going!',
            'Garry is going!',
            'Jerry is going!']
    )
)

->Tom is already in the list!
Tom
Annie
Garry
Jerry
