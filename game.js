const choice = ["rock", "paper", "scissors"];
let pc = document.getElementById("pc");
let cc = document.getElementById("cc");
let res = document.getElementById("reslut");


function playgame(playerchoice) {
    res.innerHTML = "";
    let computerchoice = choice[Math.floor(Math.random() * 3) ];
    
    pc.textContent = playerchoice;
    cc.textContent = computerchoice;

   let resmeg = "";

   if (playerchoice === computerchoice) {
    resmeg =  "ITS A TIE ";
    
   }else if ((playerchoice === "rock" && computerchoice === "scissors")||
             (playerchoice === "paper" && computerchoice === "rock")||
             (playerchoice === "scissors" && computerchoice === "paper")) {
                resmeg =  "Player wins"; 
                         
    
   }else{
    resmeg = "Computer wins"
    
   }

   let p = document.createElement("P");
   p.classList.add("reslut");
   p.textContent = resmeg;
   res.appendChild(p);

  
    
}