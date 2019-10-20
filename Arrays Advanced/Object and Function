let actionMap = {
    true: "unshift",
    false: "push"
}

function main(arr) {
 let result = [];

 for(let i = 0; i< arr.length; i++) {
     result[actionMap[arr[i]< 0]](arr[i])
 }

 return result;



 }


console.log(
    main([3, -2, 0,-1])
)

->
[ -1, -2, 3, 0 ]
