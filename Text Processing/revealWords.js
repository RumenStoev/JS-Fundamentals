
function revealWords(str1, sentence) {
    let searchWords = str1.split(", ")

    let result = sentence.split(" ");

    result.forEach((item, index) => {
        if (item.includes("*")) {
            let findIndex = searchWords.findIndex(x => x.length === item.length)


            result[index] = searchWords[findIndex]
        }
    })
    return result.join(" ")
}

console.log(
    revealWords(
        'great, learning',
        'The office is ***** place for ******** new programming languages'
    )
)


->The office is great place for learning new programming languages
