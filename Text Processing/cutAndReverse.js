function cutAndReverse(str) {
 let partOne = str.substr(0,str.length / 2).split("").reverse().join("")
 let secondPart = str.substr(str.length / 2).split("").reverse().join("")
 
 return `${partOne}\n${secondPart}`

}


console.log(
    cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
)


-> ThisIsDifficult
   ThisIsSoAmazing
