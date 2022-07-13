
function Race(arr) {
    let array = arr;
    let listOfNames = {};
    let names = array.shift().split(", ")
    ///Create Object with names///

    names.forEach(name => {
        if (!listOfNames.hasOwnProperty(name)) listOfNames[name] = 0;

    })

    ////Store race points in listOfNames////////
    array.forEach(string => {
        let patternFindDigit = /[\d]/g;
        let patternFindName = /[A-Za-z]/g

        let digit = string.match(patternFindDigit)
        let name = string.match(patternFindName).join("")

        if (listOfNames.hasOwnProperty(name)) {
            if (digit !== undefined) {
                let sum = digit.reduce((acc, value) => acc + Number(value), 0)
                listOfNames[name] += sum

            }
        }
    })

    return Object.entries(listOfNames).sort((a, b) => b[1] - a[1]).reduce((acc, value, index) => {
        let categories = ["st","nd","rd"]
        acc.push(`${index + 1}${categories[index]} place: ${value[0]}`)
        return acc;
    }, []).splice(0, 3).join("\n")
}


console.log(
    Race([
        "George, Peter, Bill, Tom",

        "G4e@55or%6g6!68e!!@",

        "R1@!3a$y4456@",

        "B5@i@#123ll",

        "G@e54o$r6ge#",

        "7P%et^#e5346r",

        "T$o553m&6",

        "end of race"
    ])
)

->1st place: George
  2nd place: Peter
  3rd place: Tom
