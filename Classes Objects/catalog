function catalog(arr) {

    let object = {};
   
    
    for (let i = 0; i < arr.length; i++) {
        let [product, price] = arr[i].split(" : ");
        let letter = product[0]
       
       
        if (!object.hasOwnProperty(letter)) {
            object[letter] = [];

        }
         
                object[letter].push(`${product}: ${parseFloat(price)}`)

             
           

    }


    return Object.entries(object).sort(((a,b) => a[0].localeCompare(b[0]))).forEach(item => {
        console.log(`${item[0]} \n  ${item[1].sort((a, b) => a.localeCompare(b)).join(" \n  ")}`)
       
     
    })
   
}

console.log(
    catalog([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ])
)


-> A 
    Anti-Bug Spray: 15 
    Apple: 1.25 
    Appricot: 1999 
    Appricot: 20.4
  B 
    Boiler: 300
  D 
    Deodorant: 10
  F 
    Fridge: 1500
  T 
    T-Shirt: 10 
    TV: 1499
