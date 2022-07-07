function Substring(str, text) {
    let sentence = text.toLowerCase()

    let compareTextAndWord = (s) => (s.split(" ").includes(str)) ? str : `${str} not found!`

    return compareTextAndWord(sentence)
}



console.log(Substring(
    'python',

    'JavaScript is the bestprogramming language'
))

-> python not found
