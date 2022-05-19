function arrayManipulations(arr) {
    let numbers = arr.shift().split(" ").map(Number)
    let commands = {
        "Add": (number) => {
            numbers.push(number)
        },
        "Remove": (number) => {
            numbers = numbers.filter(x => x !== number)
        },
        "RemoveAt": (number) => {
            numbers.splice(number, 1)
        },
        "Insert": (number, index) => {
            numbers.splice(index, 0, number)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [command, number1, number2] = arr[i].split(" ");
        number1 = Number(number1)
        number2 = Number(number2)

        commands[command](number1, number2)
    }
    return numbers.join(" ")
}

console.log(
    arrayManipulations(['4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3'])
)
-> 4 53 6 8 43 3
