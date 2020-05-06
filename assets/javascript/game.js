const teamoneshootbutton = document.querySelector("#teamone-shoot-button")

const teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button")

const restartbutton = document.querySelector("#reset-button")

const numberofresets = document.querySelector("#num-resets")

const goalsoneteam = document.querySelector("#teamone-numgoals")

const goalstwoteam = document.querySelector("#teamtwo-numgoals")

const team1shotstaken = document.querySelector("#teamone-numshots")

const team2shotstaken = document.querySelector("#teamtwo-numshots")

let team1shotnum = 0

let team1goal = 0

let team2shotnum = 0

let team2goal = 0

// let ireset = 0

let numofreset = 0




teamoneshootbutton.addEventListener("click", function () {

    team1shotstaken.innerHTML = team1shotnum += 1

    console.log("clicked")

    let random = Math.random()
    if (random < 0.5) {
        goalsoneteam.innerHTML = team1goal += 1
    }

})


teamtwoshootbutton.addEventListener("click", function () {

    team2shotstaken.innerHTML = team2shotnum += 1

    console.log("clicked")

    let random = Math.random()
    if (random < 0.5) {
        goalstwoteam.innerHTML = team2goal += 1
    }


})

console.log(restartbutton)
restartbutton.addEventListener("click", function () {
    console.log("clicked")
    numberofresets.innerHTML = numofreset += 1


    team1shotstaken.innerHTML = team1shotnum = 0
    goalsoneteam.innerHTML = team1goal = 0

    team2shotstaken.innerHTML = team2shotnum = 0
    goalstwoteam.innerHTML = team2goal = 0













})

