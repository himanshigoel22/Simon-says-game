let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns = ["red" ,"green" , "blue","yellow" ];
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let highest = 0;
document.addEventListener("keypress" , function(){
    if (started == false){
        console.log("Game is started");
        started = true;
        levelup();
    }
}
)

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    }, 280)
  }
  function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 280)
  }

  
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomidx = Math.floor(Math.random()*4);
    let randomcol = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcol}`);
    gameseq.push(randomcol);
    console.log(gameseq);
    gameflash(randombtn);
}
function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout( levelup() , 1000);
        }
    }
    else{
        h2.innerHTML = `Game OVER , your score was <b> ${level} </b> <br>You entered wrong key`;
        highest = Math.max(level, highest);
        h3.innerText = ` Highest Score : ${highest}`;
        // document.querySelector("body").style.backgroundColor = "red";
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor = "aliceblue";
        // },150);
        reset();
    }
}
function  btnpress(){
   let btn = this;
   userflash(btn);

   let usercol = btn.getAttribute("id");
   userseq.push(usercol);
   checkans(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for(button of allbtns){
    button.addEventListener("click" , btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
