function Inventory(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let [heroName, level, ...items] = arr[i].split(" / ");
        result.push({
             "Hero": heroName,
             "level": +level,
             "items": items.join(" ")
        })
        
        
    }
 
    return result.sort((a,b) => a.level - b.level).forEach(item => {
        console.log(`Hero: ${item.Hero}\nlevel => ${item.level}\nitems => ${item.items}`)
        })
}

console.log(
    Inventory([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ])
)

-> Hero: Hes
   level => 1
   items => Desolator, Sentinel, Antara
   Hero: Derek
   level => 12
   items => BarrelVest, DestructionSword
   Hero: Isacc
   level => 25
   items => Apple, GravityGun
