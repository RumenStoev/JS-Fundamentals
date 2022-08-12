function solve(arg) {
   let result = arg.sort();

   for(let i= 0; i< result.length; i++ ) {
      console.log( `${i+1}.${result[i]}`);
   }

}


console.log(
    solve([ 'Potatoes', 'Tomatoes', 'Onions', 'Apples' ])
)

->
1.Apples
2.Onions
3.Potatoes
4.Tomatoes
