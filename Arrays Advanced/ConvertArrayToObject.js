function solve(ar) {
   return ar.reduce((a,b,i) => {
       a[i] = b;
       return a
   },{})
}


console.log(
    solve(['Hello','World','10'])
)

->{ '0': 'Hello', '1': 'World', '2': '10' }
