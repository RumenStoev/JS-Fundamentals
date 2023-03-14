function findZeroSequence(arr) {
    let result = {}
    let containerZero = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            containerZero.push(i)
            result[containerZero[0]] = containerZero.length
        } else {
            containerZero = [];

        }
    }

    return Object.entries(result).map(([prop, value], key) => {
        return `Start index -> ${prop} sequences ${value}`
    }).join("\n")

}



console.log(
    findZeroSequence([1, 1, 1, 0, 0, 0, 1, 1, 1, 0])
)

->  Start index -> 3 sequences 3
    Start index -> 9 sequences 1
