function postfixNotation(arr) {
    let numbers = [];
    let operations = [];
 
    arr.map(element => {
        (typeof element === "number") ? numbers.push(element) : operations.push(element)
    })

    let instructions = {
        "+": (number1, number2) => { numbers.unshift(number1 + number2) },
        "-": (number1, number2) => { numbers.unshift(number1 - number2) },
        "*": (number1, number2) => { numbers.unshift(number1 * number2) },
        "/": (number1, number2) => { numbers.unshift(number1 / number2) }
    }

    if (numbers.length === 1) {
        return "Error: not enough operands!"

    }

    operations.map((inst, index) => {

        instructions[inst](numbers.shift(), numbers.shift());
    })


    return (numbers.length > 1) ? "Error: too many operands!" : numbers.join()
}
console.log(
    postfixNotation([3,
        4,
        '+']
    )
)
->7

console.log(
    postfixNotation([-1,
 1,
 '+',
 101,
 '*',
 18,
 '+',
 3,
 '/']
])
->6
