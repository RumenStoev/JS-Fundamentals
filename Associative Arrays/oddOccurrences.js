function oddOccurrences(arr) {
    let array = arr.split(" ").map(x => x.toLowerCase())
    let result = new Map()
    let output = []


    array.forEach(item =>

        (!result.has(item)) ? result.set(item, 1) : result.set(item, result.get(item) + 1))

    result.forEach((value, key) => {
        (value % 2 === 1) ? output.push(key) : false
    })

    return output.join(" ")

}

console.log(
    oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
)

-> c# php 1 5
