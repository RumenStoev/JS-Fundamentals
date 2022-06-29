function minerTask(arr) {
    let result = {}

    for (let i = 1; i < arr.length; i += 2) {
        if (!result.hasOwnProperty(arr[i - 1])) result[arr[i - 1]] = 0

        result[arr[i - 1]] += +arr[i]
    }

    return Object.entries(result).forEach(x => {
        console.log(`${x[0]} -> ${x[1]}`)
    })
}

console.log(
    minerTask(
        ['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])

)


-> gold -> 170
   silver -> 10
   copper -> 17
