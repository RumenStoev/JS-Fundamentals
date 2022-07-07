
function valueOfString(str, value) {
    let sum = []
    let result = str.split("")
    let findASSCICode = string => string.charCodeAt(0)
    let checkCharUpperCase = char => (char.charCodeAt() >= 65 && char.charCodeAt() <= 90);
    let checkCharLowerCase = char => (char.charCodeAt() >= 97 && char.charCodeAt() <= 122);

    let findLowerCase = (str) => str.forEach(char => {
        (char.charAt(0) === char.charAt(0).toLowerCase() && checkCharLowerCase(char)) ? sum.push(findASSCICode(char)) : false;
    })

    let findUpperCase = (str) => str.forEach(char => {
        (char.charAt(0) === char.charAt(0).toUpperCase() && checkCharUpperCase(char)) ? sum.push(findASSCICode(char)) : false;
    })

    if (value === "LOWERCASE") {
       
      findLowerCase(result)
       return `The total sum is: ${sum.reduce((acc, value) => acc + value, 0)}`
       
    } else if(value === "UPPERCASE"){
       
      findUpperCase(result)
        return `The total sum is: ${sum.reduce((acc, value) => acc + value, 0)}`

    }

}



console.log(
    valueOfString("HelloFromMyAwesomePROGRAM", "LOWERCASE")
)

console.log(
    valueOfString("AC/DC", "UPPERCASE")
)

->The total sum is: 1539
  The total sum is: 267
