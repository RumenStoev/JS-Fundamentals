function matchPhoneNumber(string) {
    let result = string.shift()
    let regexPattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g
    result = result.match(regexPattern)

    return result.join(", ")


}

console.log(
    matchPhoneNumber(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"])
)

-> +359 2 222 2222, +359-2-222-2222
