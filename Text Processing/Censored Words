// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that
// word in the text and replace them with the corresponding count of &#39;*&#39;.


function CensoredWords(str, replaceWord) {
    let result = str;
    let searchWord = replaceWord
    
    while (result.includes(searchWord)) {
        result = result.replace(searchWord, "*".repeat(searchWord.length))

    }
    return result
}

console.log(
    CensoredWords("A small sentence with some words",

        "small")
)

->A ***** sentence with some words *****
