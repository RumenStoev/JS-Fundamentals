function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ")
    let check = true;


    let commands = {
        "Buy": (equipment) => {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }

        },
        "Trash": (equipment) => {
            let findProduct = inventory.indexOf(equipment);
            if (findProduct !== -1) {
                inventory.splice(findProduct, 1);
            } else {
                return
            }
        },
        "Repair": (equipment) => {
            let findElement = inventory.indexOf(equipment);
            if (findElement !== -1) {
                inventory.push(inventory[findElement])
                inventory.splice(findElement, 1);
            }
        },
        "Upgrade": (equipment) => {
            let result = equipment.split("-")
            let searchElement = inventory.indexOf(result[0]);
            if (searchElement !== -1) {
                inventory.splice(searchElement + 1, 0, `${result[0]}:${result[1]}`)
            }

        }
    }

    arr.forEach(equipment => {
        let [command, product] = equipment.split(" ");

        commands[command](product);
    })


    return inventory.join(" ")
}


console.log(
    gladiatorInventory(['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V'])
)

-> SWORD Spear Shield
