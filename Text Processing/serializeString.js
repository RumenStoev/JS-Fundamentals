function serializeString(str) {
    let result = {};

    let separateChar = str => {
        let value = str.split("")
        return value.forEach((char, index) => {
            if (!result.hasOwnProperty(char)) {
                result[char] = []
            }

            result[char].push(index)
        })
    }
  

   separateChar(str)

    return Object.keys(result).forEach(key => {
        let value = result[key].reduce((acc, value) => {
            acc.push(value)
            return acc;
        }, [])
        console.log(`${key}:${value.join("/")}`)
    })

}
console.log(
    serializeString("avjavamsdmcalsdm")
)


console.log(
    serializeString("abababa")
)

->a:0/3/5/11
  v:1/4
  j:2
  m:6/9/15
  s:7/13
  d:8/14
  c:10
  l:12

  a:0/2/4/6
  b:1/3/5
