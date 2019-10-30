function solve(arr) {
   let days = Number(arr.shift());
   let plunderDay = Number(arr.shift())
    let selected = Number(arr.shift())
    let total = 0;
    for (let i = 1; i <= days ; i++) {
        total+=plunderDay
        if(i %3 === 0) {
            total+=plunderDay*0.5;
        }
        if(i % 5 === 0) {
            total-= total * 0.3;
        }
    }
    if(total>= selected) {
        return `Ahoy! ${total.toFixed(2)} plunder gained.`
    } else {
        let percentage = total / expected * 100;
        return `Collected only ${percentage.toFixed(2)}% of the plunder.`
    }

}


console.log(
    solve([ '5', '40', '100' ])
)


->Ahoy! 154.00 plunder gained.
