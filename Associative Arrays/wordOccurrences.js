function wordOccurrences(arr) {
    let result = new Map();

    arr.forEach(word => {
        let existWord = result.get(word)

        if (!result.has(word)) {
            result.set(word, 1)
        } else {
            result.set(word, existWord + 1)
        }
    })

    return new Map([...result].sort((a, b) => b[1] - a[1])).forEach((key, value) => {
        console.log(`${value} -> ${key} times`)
    })



}

console.log(
    wordOccurrences(["Here", "is", "the", "first", "sentence",

        "Here", "is", "another", "sentence", "And",

        "finally", "the", "third", "sentence"])
)


-> sentence -> 3 times
   Here -> 2 times
   is -> 2 times
   the -> 2 times
   first -> 1 times
   another -> 1 times
   And -> 1 times
   finally -> 1 times
   third -> 1 times
