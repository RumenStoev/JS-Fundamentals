function WordsTracker(arr) {
    let searchingWords = arr.shift().split(" ")
    let result = new Map()
    let counter = 0;

    searchingWords.forEach((item) => {
        result.set(item, counter)
    })

    arr.forEach(str => {

        if (result.has(str)) {
            result.set(str, (result.get(str) + 1))
        }
    })
    return new Map([...result].sort((a, b) => b[1] - a[1])).forEach((value, key) => {
        console.log(`${key} - ${value}`)
    })
}

console.log(
    WordsTracker([

        'this sentence',

        'In', 'this', 'sentence', 'you', 'have', 'to',

        'count', 'the', 'occurances', 'of', 'the',

        'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'

    ])
)

console.log(
    WordsTracker(["is the",
        "first", "sentence", "Here", "is", "another", "the", "And", " finally", "the", "the", "sentence"])
)

->this - 3
 sentence - 2
 
->the - 3
   is - 1
