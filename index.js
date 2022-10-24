const homeScore=document.querySelector(".homeScore")
const guestScore=document.querySelector(".guestScore")
const btn1=document.querySelector(".btn1")
const btn2=document.querySelector(".btn2")
const btn3=document.querySelector(".btn3")
const NewGameBtn=document.querySelector(".newGame")


//for Home section
let countH = 0
function add1() {
    countH+=1
    homeScore.innerHTML=countH
}

function add2() {
    countH+=2
    homeScore.innerHTML=countH
}
function add3() {
    countH+=3
    homeScore.innerHTML=countH
}
//for Guest section
let countG=0
function add4() {
    countG+=1
    guestScore.innerHTML=countG
}

function add5() {
    countG+=2
    guestScore.innerHTML=countG
}
function add6() {
    countG+=3
    guestScore.innerHTML=countG
}

//for New Game

function newGame(){
   countH=0
   countG=0
   homeScore.innerHTML=0
   guestScore.innerHTML=0
}










