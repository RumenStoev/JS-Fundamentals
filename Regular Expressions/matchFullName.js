function matchFullName(name) {
    let result = name
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+/g
    result = result.match(regEx)

    return result.join(" ")
}


console.log(
    matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
)

->Ivan Ivanov Test Testov
