function BrowserHistory(obj, arr) {

    let openWebSite = (command, webSite) => {

        obj["Open Tabs"].push(webSite);
        obj["Browser Logs"].push(`${command} ${webSite}`)
    }

    let closeWebSite = (command, webSite) => {
        if (obj["Open Tabs"].includes(webSite)) {

            obj["Open Tabs"] = obj["Open Tabs"].filter(x => x !== webSite)
        }

        obj["Recently Closed"].push(webSite);
        obj["Browser Logs"].push(`${command} ${webSite}`)
    }

    let clearHistoryAndCache = () => {
        obj["Open Tabs"] = []
        obj["Recently Closed"] = []
        obj["Browser Logs"] = []
    }

    let commands = {
        "Open": (command, webSite) => openWebSite(command, webSite),
        "Close": (command, webSite) => closeWebSite(command, webSite),
        "Clear": () => clearHistoryAndCache()
    }

    arr.forEach(item => {
        let [command, webSite] = item.split(" ")
        commands[command](command, webSite)
    })


    console.log(`${obj["Browser Name"]}`)
    console.log(`Open Tabs: ${obj["Open Tabs"].join(", ")}`)
    console.log(`Recently Closed: ${obj["Recently Closed"].join(", ")}`)
    console.log(`Browser Logs: ${obj["Browser Logs"].join(", ")}`)



}


console.log(
    BrowserHistory({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])
)
-> Mozilla Firefox
   Open Tabs: Twitter
   Recently Closed: 
   Browser Logs: Open Twitter

console.log(
    BrowserHistory({
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate",
            "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
        ["Close Facebook", "Open StackOverFlow", "Open Google"] )
)

->Google Chrome
  Open Tabs: YouTube, Google Translate, StackOverFlow, Google
  Recently Closed: Yahoo, Gmail, Facebook
  Browser Logs: Open YouTube, Open Yahoo, Open Google Translate, Close Yahoo, Open Gmail, Close Gmail, Open Facebook, Close Facebook, Open StackOverFlow, Open Google
