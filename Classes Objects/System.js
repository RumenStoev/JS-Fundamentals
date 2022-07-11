function System(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let [systemName, componentName, sybcomponentName] = arr[i].split(" | ");
        if (!result.hasOwnProperty(systemName)) {
            result[systemName] = {}
        }
        if (!result[systemName].hasOwnProperty(componentName)) {
            result[systemName][componentName] = []
        }
        if (!result[systemName][componentName].includes(sybcomponentName)) {
            result[systemName][componentName].push(sybcomponentName)
        }

    }
    let sortByLetter = (a, b) => a.localeCompare(b)
    let sortByLenghtComponent = (a, b) => Object.keys(result[b]).length - Object.keys(result[a]).length


    function compareByLenghtAndAlphabetical(object) {
        return Object.keys(object)
                     .sort(sortByLetter)
                     .sort(sortByLengthComponent)

    }

    return compareByLenghtAndAlphabetical(result).forEach((objName, index) => {
          console.log(`${objName}`)
       
          Object.keys(result[objName]).forEach(key => {
            if (key === "undefined") return
            console.log(`|||${key}`)

            result[objName][key].forEach(item => {
                console.log(`||||${item}`)
            })
        })

    })
   

}


console.log(
    System(["SULS | Main Site | Home Page",
        "SULS | Main Site | Login Page",
        "SULS | Main Site | Register Page",
        "SULS | Judge Site | Login Page",
        "SULS | Judge Site | Submittion Page",
        "Lambda | CoreA | A23",
        "SULS | Digital Site | Login Page",
        "Lambda | CoreB | B24",
        "Lambda | CoreA | A24",
        "Lambda | CoreA | A25",
        "Lambda | CoreC | C4",
        "Indice | Session | Default Storage",
        "Indice | Session | Default",
        "Security"])
)



-> Lambda
|||CoreA
||||A23
||||A24
||||A25
|||CoreB
||||B24
|||CoreC
||||C4
SULS
|||Main Site
||||Home Page
||||Login Page
||||Register Page
|||Judge Site
||||Login Page
||||Submittion Page
|||Digital Site
||||Login Page
Indice
|||Session
||||Default Storage
||||Default
Security
