function createObject(arg) {
   let data = {};

   for(let row of arg) {
       let element = row.split(' | ');
       const obj = {
           town: element[0],
           latitude: Number(element[1]).toFixed(2),
           longitude: Number(element[2]).toFixed(2)
       }

       console.log(obj)

   }




}

 Solution2:
 function town(arr) {
    let result = arr.forEach(item => {
        let [town, latitude, longitude] = item.split(" | ")
        console.log(`{ town: '${town}', latitude: '${parseFloat(Number(latitude)).toFixed(2)}', longitude: '${parseFloat(Number(longitude)).toFixed(2)}' }`)

    })
}




console.log(
    createObject([ 'Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625' ])
)

->{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }
