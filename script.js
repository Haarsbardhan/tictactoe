let boxes=document.querySelectorAll(".box");
let winner=document.querySelector(".winner");
let newGame=document.querySelector(".new-game");
let rstGame=document.querySelector(".rst-game");

let moveX=true;
let winningPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(moveX){
            box.style.color='red';
            box.innerText="X";
            moveX=false;
        }
        else{
            box.style.color='blue';
            box.innerText="O";
            moveX=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    });
});

let checkWinner=()=>{
    for(let pattern of winningPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
    
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                winner.classList.remove("display");
                winner.innerText=`Winner is ${val1}`;
                disableBoxes();
                break;
            }
            else if(count===9){
                winner.classList.remove("display");
                winner.innerText=`Draw!`;
            }
        }
    }
}

let restart=()=>{
    enableBoxes();
    moveX=true;
    count=0;
    winner.classList.add("display");
}
newGame.addEventListener("click",restart);
rstGame.addEventListener("click",restart);
