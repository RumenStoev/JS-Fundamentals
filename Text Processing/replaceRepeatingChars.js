function replaceRepeatingChars(str) {
  let test = str.split("")
  let result  = "";

  test.forEach((char,i,arr) => (char.charAt(0) !== arr[i + 1] ) ? result+=char: false)

  return result
  
}


console.log(
    replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
)

-> abcdedsa
