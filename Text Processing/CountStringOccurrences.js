function solve(par1,par2) {
    let word = par1.split(" ");
    let counter = 0;
    for(let el of word) {
        if(el.indexOf(par2) != -1) {
            counter = el.length
        }
    }
    return counter
}

->2



function solve(par1,par2) {
    let result = par1.split(" ")
    if(result.includes(par2)) {
        console.log(par2.length)
    } 
}


function CountStringOccurrences(str,searchWord) {
  let result = str.split(" ");
  let counter = 0
  
  result.forEach(element => {
      (element === searchWord) ? counter++ : false
  });
  
  return counter
  
}

console.log(
    solve("This is a word and it also is a sentence is","is")
)
->2 
