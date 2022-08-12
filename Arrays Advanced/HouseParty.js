// Write a function that keeps track of guests that are going to a house party.
//     You will be given an array of strings. Each string will be one of the following:
//     - {name} is going!&quot;
// - {name} is not going!&quot;
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in
// the list print: &quot;{name} is already in the list!&quot;).
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not
//     print: &quot;{name} is not in the list!&quot;).
// At the end print all the guests each on a separate line.


function solve(arr) {
    let list = [];
    for(let line of arr) {
        let item = line.split(" ");
         let name = item[0]
        if(item.length === 3) {
            let isIncluded = list.includes(name)
            if(isIncluded) {
                console.log(`${name} is already in the list!`)
            }else  {
                list.push(name)
            }
        } else {
            //Remove person from list
            let indexOfPerson = list.indexOf(name);
            if(indexOfPerson !== -1) {
                list.splice(indexOfPerson,1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }





}

console.log(
    solve([
        'Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!'
    ])
)

->John is not in the list!
