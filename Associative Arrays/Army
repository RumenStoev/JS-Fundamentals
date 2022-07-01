
function Armies(arr) {
    let result = {};
    let armyList = []
    let counter = 0;
   ////Filter find Leaders and put their in general Object/////////
    arr.forEach(item => {
        let leaders = item.split("arrives");

        if (leaders[1] === "") result[leaders[0].trim()] = {};
        
        armyList.push(leaders[0].trim())

    })
   /////////////////////////////////////////////////////////////////

   ////Separate Existed Armies and Counts and put in Leader's containers//////////////
    armyList.forEach((item, index, array) => {

        let [name, armyResources] = item.split(": ");
        if (armyResources !== undefined) armyResources = armyResources.split(", ")

        if (result.hasOwnProperty(name) && !name.includes("+") && armyResources !== undefined) {

            result[name][armyResources[0].trim()] = Number(armyResources[1])
            counter = index;
        }
        else {
            name = name.split("+")

            let currentName = array[counter].split(": ")[0]//The last name's leader
            if (name.length === 1 && name[0].includes("defeated")) {
                let deleteName = name[0].split("defeated")[0].trim()
                delete result[deleteName]

            }
            if (name.length > 1 && result[currentName][name[0].trim()] !== undefined) {
                result[currentName][name[0].trim()] += Number(name[1])
            }
        }
    })
    ////////////////////////////////////////////////////////////////////////////////////////
    
    let findTotalCountValue = (a) => Object.values(a).reduce((acc, value) => acc + value, 0);
    let sortByTotalCount = (a, b) => findTotalCountValue(b[1]) - findTotalCountValue(a[1])
    let sortByCountDescending = (a, b) => b[1] - a[1]
    let takeCurrentSortedValues // Find solution for reduce 

    return Object.entries(result)
        .sort(sortByTotalCount)
        .forEach((key, value) => {

            let totalSum = Object.entries(key[1]).reduce((acc, value) => {
                return acc + value[1]
            }, 0)

            let printElementsOfArmy = Object.entries(key[1])
                .sort(sortByCountDescending)
                .reduce((acc, value) => {
                    acc.push(`>>> ${value[0]} - ${value[1]}`)
                    return acc
                }, [])
                
            console.log(`${key[0]}: ${totalSum} `)
            console.log(`${printElementsOfArmy.join("\n")}`)
        })
}


console.log(
    Armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
)


console.log(
    Armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])
)

-> Porter: 58507 
 >>> Legion - 55302
 >>> Retix - 3205
   Findlay: 39040 
 >>> Britox - 39040

  Wexamp: 44578 
 >>> Juard - 43423
 >>> Britox - 1155
  Findlay: 34880 
 >>> Wexamp - 34880
 Rick Burr: 1500 
 >>> Juard - 1500
