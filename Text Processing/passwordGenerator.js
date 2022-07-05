function passwordGenerator(arr) {
    let password = arr.shift().concat(arr.shift()).split("")
    let thirdWord = arr.pop();
    let counter = 0;

    let vowels = {
        "a": "a",
        "o": "o",
        "e": "e",
        "i": "i",
        "u": "u"

    }

    password.forEach((char, i, array) => {
        if (vowels.hasOwnProperty(char)) {
            array[i] = thirdWord[counter].toUpperCase();
            counter++
        }
        if (counter === thirdWord.length) counter = 0
           
    })
    
    let result =  password.reverse().join("")
    
    return `Your generated password is ${result}`
}

console.log(
    passwordGenerator(
        [
            'ilovepizza',

            'ihatevegetables',

            'orange'

        ]
    )
)

-> Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO
