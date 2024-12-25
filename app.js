let boxes=document.querySelectorAll(".box");
let resetBt=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
    const winPatterns=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8], 
    ];

    const resetGame=() =>{
        turnO=true;
        ensableBoxes();
        msgContainer.classList.add("hide");
    }

    boxes.forEach((box) => {
        box.addEventListener("click",() =>{
                if(turnO){
                box.style.color = "rgb(255, 111, 33)";
                    box.innerText="O";
                    turnO=false;
            }
            else{
                box.style.color = "rgb(86, 225, 216)";
                box.innerText="X";
                turnO=true;

            }
            box.disabled=true;
            checkWinner();
        });
    });
    const disableBoxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    }
    const ensableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }

    const showWinner=(wi)=>{
        msg.style.color = "rgb(3, 126, 15)";
        msg.innerText=`😀Congratulations My Dear Winner is ${wi}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
    const checkWinner=()=>{
        for(let pattern of winPatterns){
            pos1Val=boxes[pattern[0]].innerText,
            pos2Val=boxes[pattern[1]].innerText,
            pos3Val=boxes[pattern[2]].innerText
                if(pos1Val !="" && pos2Val!=""&&pos3Val!=""){
                    if(pos1Val===pos2Val && pos2Val=== pos3Val){
                        showWinner(pos1Val);
                    }
                }
        }};

        newGameBtn.addEventListener("click",resetGame);
        resetBt.addEventListener("click",resetGame);


