let homePts = document.getElementById("home-pts")
let homeCount = 0
let guestPts = document.getElementById("guest-pts")
let guestCount = 0

function homeAddPoint() {
    homeCount = homeCount +1
    homePts.textContent = homeCount
}
function homeAddTwoPoint(){
    homeCount = homeCount +2
    homePts.textContent = homeCount
} 

function homeAddThreePoint(){
    homeCount = homeCount +3
    homePts.textContent = homeCount
}

function guestAddPoint(){
    homeCount = homeCount +1
    guestPts.textContent = homeCount
}
function guestAddTwoPoint(){
    homeCount = homeCount +2
    guestPts.textContent = homeCount}

function guestAddThreePoint(){
    homeCount = homeCount +3
    guestPts.textContent = homeCount}