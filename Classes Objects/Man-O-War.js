
function manOWar(arr) {
    let output;
    let pirateShip = arr.shift().split(">").map(Number)
    let warShip = arr.shift().split(">").map(Number)
    let maxhealthSection = +arr.shift()

    let stopRequirements = () => {
        arr.length = [];
        pirateShip.length = 0
        warShip.length = 0
    }

    let commands = {
        "Fire": (array) => {
            let [index, damage] = array;
            index = +index;
            damage = +damage;

         
            if (warShip[index] !== undefined) {
                warShip[index] -= damage
               
            }
            if (warShip[index] <= 0) {
                console.log("You won! The enemy ship has sunken.")
                stopRequirements()
                return
            }

        },
        "Defend": (array) => {
            let [startIndex, endIndex, damage] = array;
            startIndex = +startIndex;
            endIndex = +endIndex;
            damage = +damage;
            

            if (pirateShip[startIndex] !== undefined && pirateShip[endIndex] !== undefined) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage
                    if (pirateShip[i] < 0) {

                        console.log("You lost! The pirate ship has sunken.")
                        stopRequirements()
                        return
                    }
                }
            } else {
                return
            }

        },
        "Repair": (array) => {
            let [index, health] = array;
            index = +index;
            health = +health;
          
            if (pirateShip[index] !== undefined) {
                pirateShip[index] += health;
                if (pirateShip[index] > maxhealthSection) {
                    pirateShip[index] = maxhealthSection
                }
            } else {
                return;
            }
        },
        "Status": () => {
            let searchingProcent = (maxhealthSection / 100) * 20; //20%

            let copyPirateShip = pirateShip.slice()

            copyPirateShip = copyPirateShip.filter(num => num < searchingProcent);

            if (copyPirateShip.length > 0) {
                console.log(`${copyPirateShip.length} sections need repair.`)
            }
        }
    }

    arr.forEach(str => {
        let [command, ...params] = str.split(" ")

        if (command === "Retire") return

        commands[command](params)
    })

    if (pirateShip.length !== 0 && warShip.length !== 0) {
        console.log(`Pirate ship status: ${pirateShip.reduce((value, index) => value + index, 0)}\nWarship status: ${warShip.reduce((value, index) => value + index, 0)}`)

    }


}
console.log(
    manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
    )
)

-> 2 sections need repair.
   Pirate ship status: 135
   Warship status: 205
