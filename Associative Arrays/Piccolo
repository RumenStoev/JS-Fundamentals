function Piccolo(arr) {
   let result = new Map();
   
   arr.forEach(item => {
    let [direction,carNumber] = item.split(", ");
      (direction === "IN") ? result.set(carNumber) : result.delete(carNumber)
   })
   
  
  return (result.size >= 1) ? [...result].sort().map(x => x[0]).join("\n") : "Parking Lot is Empty"
}

->console.log(
    Piccolo(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA',
    
    'OUT, CA2866HI',
    
    'IN, CA9876HH',
    
    'IN, CA2822UU'])
)
-> CA2822UU
   CA2844AA
   CA9876HH
   CA9999TT
