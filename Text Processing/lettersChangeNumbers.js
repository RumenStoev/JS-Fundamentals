//Short way,but with few points from the test system!
function lettersChangeNumbers(str) {
    let result = str.split(" ");
    let total = [];

    let checkStrUpperCase = str => str.charAt() === str.charAt().toUpperCase()
    let findCharCode = str => str.toUpperCase().charCodeAt(0) - 64
    let requirements = {
        root: 0,
        leftFn: function (v) { return (checkStrUpperCase(v)) ? this.root /= findCharCode(v) : this.root *= findCharCode(v) },
        rightFn: function (v) { return (checkStrUpperCase(v)) ? this.root -= findCharCode(v) : this.root += findCharCode(v) }
    }
    result.forEach((item, index, arr) => {
        item = item.split("")
        let left = item.shift()
        let right = item.pop()
        let root = +item.join("");
        
        requirements["root"] = root;
       (left !== undefined) ? total[index] = requirements["leftFn"](left) : (right!== undefined) ?  total[index] = requirements["rightFn"](right) : false
       
    })

    return `${total.reduce((acc, value) => acc + value, 0).toFixed(2)}`
}







function lettersChangeNumbers(str) {
    let total = [];
    let tree = {};
    let result = str.split(" ")

    result.reduce((acc, value, index) => {
        acc[index] = {
            root: [],
            left: [],
            right: []
        }
        return acc;
    }, tree)


    let requirements = {//Has a short way! :)

        root: 0,
       
        left: function (values, index) {
        
            values.forEach(value => {
                let left = 0;
                if (value.charAt(0) === value.charAt(0).toUpperCase()) {

                    this.root /= (value.toUpperCase().charCodeAt() - 64);
                } else {
                    this.root *= (value.toUpperCase().charCodeAt() - 64);
                }
                total[index] = this.root;

            })
        },
        
        right: function (values, index) {
            
            values.forEach(value => {
                let right = 0;
                if (value.charAt(0) === value.charAt(0).toUpperCase()) {
                    this.root -= (value.toUpperCase().charCodeAt() - 64)
                } else {
                    this.root += (value.toUpperCase().charCodeAt() - 64)
                }
                total[index] = this.root

            })
        }
    }

    result.forEach((item, index) => {
        let value = item.split("");
        value.forEach((x, i, arr) => {

            if (isNaN(x)) tree[`${index}`]["left"].push(arr.shift())

            if (isNaN(arr[arr.length - (i + 1)])) tree[`${index}`]["right"].push(arr.pop())

        })

        tree[`${index}`]["root"].push(+value.join(""))
    })

    Object.entries(tree).forEach((values, index) => {
        Object.entries(values[1]).forEach(item => {


            (item[0] === 'root') ? requirements[item[0]] = item[1][0] : requirements[item[0]](item[1], index)
        })
    })
    
    return total.reduce((acc,value) => acc + value,0).toFixed(2)

}

console.log(
    lettersChangeNumbers('A12b s17G')
)

console.log(
    lettersChangeNumbers('P34562Z q2576f H456z')
)
