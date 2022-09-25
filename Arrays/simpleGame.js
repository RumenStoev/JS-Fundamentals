function game(arr) {
  let games = arr.shift().split(" ");


  let containerCommands = {
    "Install": (element) => {
      return (!games.includes(element)) ? games.push(element) : false;
    },
    "Uninstall": (element) => {
      return (games.includes(element)) ? games.splice(games.indexOf(element), 1) : false

    },
    "Update": (element) => {
      if (!games.includes(element)) {
        return false
      }
      let currentIndex = games[games.indexOf(element)]
      games.splice(games.indexOf(element), 1)
      games.push(currentIndex)


    },
    "Expansion": (element) => {
      let expansion = element.split("-");
      let check = games.indexOf(expansion[0]);
      let expansionName = `${expansion[0]}:${expansion[1]}`
      if (check === 0) {
        games.splice(1, check, expansionName)
      }
    }
  }


  function commands(element) {
    let command = element.split(" ")[0];
    let currentGame = element.split(" ")[1]

    while (command !== "Play!") {
      return containerCommands[command](currentGame)
    }

  }


  arr.forEach(commands)


  return games.join(" ")

}


console.log(
  game(['CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!'])
)

console.log(
  game(['CS WoW Diablo',
  'Uninstall XCOM',
  'Update PeshoGame',
  'Update WoW',
  'Expansion Civ-V',
  'Play!'])
)


-> CS CS:Go LoL Diablo
CS Diablo WoW
