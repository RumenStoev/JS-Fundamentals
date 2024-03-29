function flightSchedule(arr) {

    let [currentFlights, changedFlights, searchCommand] = arr;
    let result = {};
    let currentChanges = {}
    let commands = {
        "Cancelled": (obj) => {
            Object.keys(result).forEach(item => {
        (!currentChanges.hasOwnProperty(item)) ? delete result[item] : false
            })
        },
        "Ready to fly": (obj) => {
            Object.entries(obj).forEach((item) => {
                (result.hasOwnProperty(item[0])) ? delete result[item[0]] : false

            })
        }
    }


    currentFlights = currentFlights.map(item => {
        let [number, ...city] = item.split(" ");

        result[number] = city.join(" ");
    })

    changedFlights.forEach(item => {
        let [number, city] = item.split(" ");

        currentChanges[number] = city;

    })


    commands[searchCommand](currentChanges)

    return Object.values(result).forEach(item => {
        console.log({
            Destination: `${item}`,
            Status: `${searchCommand[0]}`
        })
    })
}

///////////////////Another Solution////////////////////////////////////////////////
function flightSchedule(arr) {

    let [currentFlights, changedFlights, searchCommand] = arr;
    let exitPattern = {
        Destination: "",
        Status: searchCommand[0]
    }

    changedFlights = changedFlights.map((item) => {
        let [name, city] = item.split(" ")
        return name
    })
    
    return currentFlights.forEach(item => {
        let [name, ...city] = item.split(" ");
        city = city.join(" ")
        if (searchCommand[0] === "Cancelled" && changedFlights.includes(name)) {

            exitPattern["Destination"] = city

            console.log(exitPattern)
        }
        if (searchCommand[0] === "Ready to fly" && !changedFlights.includes(name)) {
            exitPattern["Destination"] = city
            console.log(exitPattern)
        }
    })


}

/////////////////////////////////////////////////////////////////////////////////////

console.log(
    flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK330 Cancelled'],
     ['Ready to fly']
 ])
)

-> -> { Destination: 'Delaware', Status: 'Ready to fly' }
      { Destination: 'Oregon', Status: 'Ready to fly' }
      { Destination: 'Las Vegas', Status: 'Ready to fly' }
      { Destination: 'Ohio', Status: 'Ready to fly' }
      { Destination: 'New York', Status: 'Ready to fly' }
      { Destination: 'Illinois', Status: 'Ready to fly' }
      { Destination: 'Pennsylvania', Status: 'Ready to fly' }



console.log(
 flightSchedule([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK430 Cancelled'],
	['Cancelled']
])
)

-> { Destination: 'Alabama', Status: 'Cancelled' }
   { Destination: 'California', Status: 'Cancelled' }
   { Destination: 'Texas', Status: 'Cancelled' }



