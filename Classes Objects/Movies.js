function movies(arr) {
    let result = [];
    let searchCommands = ["directedBy", "onDate", "addMovie"];

    function checkMovieExist(nameOfMovie, director, data) {

        result.find((movie, i) => movie.name === nameOfMovie);
    }

    function findDirector(director, nameOfMovie) {
        (director) ? result.some((v, i) => (v.name === nameOfMovie) ? v["director"] = director : false) : false
    }

    function findData(data, nameOfMovie) {
        (data) ? result.some((v, i) => (v.name === nameOfMovie) ? v["date"] = data : false) : false
    }

    function checkFullInfoObject(obj) {
        if (Object.values(obj).length === 3) return obj
    }

    let commands = {
        "addMovie": (infoMovie) => {
            let nameOfMovie = infoMovie.slice(1, infoMovie.length).join(" ");

            if (!checkMovieExist(nameOfMovie)) result.push({ "name": nameOfMovie })
        },
        "directedBy": (infoMovie) => {
            let indexOfWord = infoMovie.indexOf("directedBy");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let director = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ");

            findDirector(director, nameOfMovie);
        },
        "onDate": (infoMovie) => {

            let indexOfWord = infoMovie.indexOf("onDate");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let data = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ")

            findData(data, nameOfMovie)
        }
    }


    for (let i = 0; i < arr.length; i++) {
        let infoMovie = arr[i].split(" ");
        let currectCommand = infoMovie.filter(command => searchCommands.includes(command)).join(" ");

        commands[currectCommand](infoMovie)
    }

    result.forEach(obj => {
        if (checkFullInfoObject(obj)) console.log(JSON.stringify(obj))
    })

}




console.log(
    movies([
        "addMovie The Avengers",
        "addMovie Superman",
        "The Avengers directedBy Anthony Russo",
        "The Avengers onDate 30.07.2010",
        "Captain America onDate 30.07.2010",
        "Captain America directedBy Joe Russo"
    ]
    )
)

-> function movies(arr) {
    let result = [];
    let searchCommands = ["directedBy", "onDate", "addMovie"];

    function checkMovieExist(nameOfMovie, director, data) {

        result.find((movie, i) => movie.name === nameOfMovie);
    }

    function findDirector(director, nameOfMovie) {
        (director) ? result.some((v, i) => (v.name === nameOfMovie) ? v["director"] = director : false) : false
    }

    function findData(data, nameOfMovie) {
        (data) ? result.some((v, i) => (v.name === nameOfMovie) ? v["date"] = data : false) : false
    }

    function checkFullInfoObject(obj) {
        if (Object.values(obj).length === 3) return obj
    }

    let commands = {
        "addMovie": (infoMovie) => {
            let nameOfMovie = infoMovie.slice(1, infoMovie.length).join(" ");

            if (!checkMovieExist(nameOfMovie)) result.push({ "name": nameOfMovie })
        },
        "directedBy": (infoMovie) => {
            let indexOfWord = infoMovie.indexOf("directedBy");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let director = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ");

            findDirector(director, nameOfMovie);
        },
        "onDate": (infoMovie) => {

            let indexOfWord = infoMovie.indexOf("onDate");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let data = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ")

            findData(data, nameOfMovie)
        }
    }


    for (let i = 0; i < arr.length; i++) {
        let infoMovie = arr[i].split(" ");
        let currectCommand = infoMovie.filter(command => searchCommands.includes(command)).join(" ");

        commands[currectCommand](infoMovie)
    }

    result.forEach(obj => {
        if (checkFullInfoObject(obj)) console.log(JSON.stringify(obj))
    })

}




console.log(
    movies([
        "addMovie The Avengers",
        "addMovie Superman",
        "The Avengers directedBy Anthony Russo",
        "The Avengers onDate 30.07.2010",
        "Captain America onDate 30.07.2010",
        "Captain America directedBy Joe Russo"
    ]
    )
)
-> function movies(arr) {
    let result = [];
    let searchCommands = ["directedBy", "onDate", "addMovie"];

    function checkMovieExist(nameOfMovie, director, data) {

        result.find((movie, i) => movie.name === nameOfMovie);
    }

    function findDirector(director, nameOfMovie) {
        (director) ? result.some((v, i) => (v.name === nameOfMovie) ? v["director"] = director : false) : false
    }

    function findData(data, nameOfMovie) {
        (data) ? result.some((v, i) => (v.name === nameOfMovie) ? v["date"] = data : false) : false
    }

    function checkFullInfoObject(obj) {
        if (Object.values(obj).length === 3) return obj
    }

    let commands = {
        "addMovie": (infoMovie) => {
            let nameOfMovie = infoMovie.slice(1, infoMovie.length).join(" ");

            if (!checkMovieExist(nameOfMovie)) result.push({ "name": nameOfMovie })
        },
        "directedBy": (infoMovie) => {
            let indexOfWord = infoMovie.indexOf("directedBy");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let director = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ");

            findDirector(director, nameOfMovie);
        },
        "onDate": (infoMovie) => {

            let indexOfWord = infoMovie.indexOf("onDate");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let data = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ")

            findData(data, nameOfMovie)
        }
    }


    for (let i = 0; i < arr.length; i++) {
        let infoMovie = arr[i].split(" ");
        let currectCommand = infoMovie.filter(command => searchCommands.includes(command)).join(" ");

        commands[currectCommand](infoMovie)
    }

    result.forEach(obj => {
        if (checkFullInfoObject(obj)) console.log(JSON.stringify(obj))
    })

}




console.log(
    movies([
        "addMovie The Avengers",
        "addMovie Superman",
        "The Avengers directedBy Anthony Russo",
        "The Avengers onDate 30.07.2010",
        "Captain America onDate 30.07.2010",
        "Captain America directedBy Joe Russo"
    ]
    )
)
->function movies(arr) {
    let result = [];
    let searchCommands = ["directedBy", "onDate", "addMovie"];

    function checkMovieExist(nameOfMovie, director, data) {

        result.find((movie, i) => movie.name === nameOfMovie);
    }

    function findDirector(director, nameOfMovie) {
        (director) ? result.some((v, i) => (v.name === nameOfMovie) ? v["director"] = director : false) : false
    }

    function findData(data, nameOfMovie) {
        (data) ? result.some((v, i) => (v.name === nameOfMovie) ? v["date"] = data : false) : false
    }

    function checkFullInfoObject(obj) {
        if (Object.values(obj).length === 3) return obj
    }

    let commands = {
        "addMovie": (infoMovie) => {
            let nameOfMovie = infoMovie.slice(1, infoMovie.length).join(" ");

            if (!checkMovieExist(nameOfMovie)) result.push({ "name": nameOfMovie })
        },
        "directedBy": (infoMovie) => {
            let indexOfWord = infoMovie.indexOf("directedBy");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let director = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ");

            findDirector(director, nameOfMovie);
        },
        "onDate": (infoMovie) => {

            let indexOfWord = infoMovie.indexOf("onDate");
            let nameOfMovie = infoMovie.slice(0, indexOfWord).join(" ");
            let data = infoMovie.slice(indexOfWord + 1, infoMovie.length).join(" ")

            findData(data, nameOfMovie)
        }
    }


    for (let i = 0; i < arr.length; i++) {
        let infoMovie = arr[i].split(" ");
        let currectCommand = infoMovie.filter(command => searchCommands.includes(command)).join(" ");

        commands[currectCommand](infoMovie)
    }

    result.forEach(obj => {
        if (checkFullInfoObject(obj)) console.log(JSON.stringify(obj))
    })

}




console.log(
    movies([
        "addMovie The Avengers",
        "addMovie Superman",
        "The Avengers directedBy Anthony Russo",
        "The Avengers onDate 30.07.2010",
        "Captain America onDate 30.07.2010",
        "Captain America directedBy Joe Russo"
    ]
    )
)

-> {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}
