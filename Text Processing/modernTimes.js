function modernTimes(str) {
    let sentence = str.split(" ");
    let invalid = str => {
        let code = str.charCodeAt(1)
        if ((code >= 65 && code <= 90) ||
            (code >= 97 && code <= 122) || (code == 32)) { return true; }
        else { return false; }
    }
    let result = [];
    sentence.forEach((x, index, arr) => {
        (x.includes("#") && invalid(x)) ? result.push(`${x.substr(1)}`) : false
    })
    return result.join("\n")
}

console.log(
    modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
)

->  special 
    socialMedia
