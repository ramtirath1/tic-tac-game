// let boxes=document.querySelector(".box");
let boxes=document.querySelectorAll(".box");
let resetBt=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;// if O player turn the screen print O if X trun then
    //  on button print X
    // if value true then O if false then X
    // 2D ARRAY
    // let arr2=[["apple","litchi"],["potato","mushroom"],["pants","shirts"]];
    // can acces arr2, arr2[1],arr2[1][0]
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
        //when game reset then message class hide
        msgContainer.classList.add("hide");
    }

    boxes.forEach((box) => {
        box.addEventListener("click",() =>{
            // console.log("box was clicked");
            // box.innerText="abcd"; its accoring to turn so
            // if(turnO===true){
                if(turnO){// if player O turn then print O and turn0 false because when false then player x trurn come
                // box.style.color = "#fc03fc";
                box.style.color = "rgb(255, 111, 33)";
                    box.innerText="O";
                    turnO=false;// but times false
            }
            else{
                box.style.color = "rgb(86, 225, 216)";
                box.innerText="X";// if player x turn then print x
                turnO=true;// turn true means turn go to O beacuse turn O is true in the value

            }
            // becuase when any box click and value store then button automatically diabled that is why box.diable=true;
            box.disabled=true;
            // check winner function is used for who is winner
            checkWinner();
        });
    });
    // const checkWinner=()=>{
        // to check winner if same number on all three linear position
        // then tranverse element with the help of loop
        // for(let pattern of winPatterns){
            // console.log(pattern);
            //when we click on the box then call to checwinner and check winner ek ek karke saare patterns ko nikale ga
            // from pattern array first individual index nikal lete hai

            // console.log(pattern[0],pattern[1],pattern[2]);

            // to check first position element in the box
            // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
            // to print inside value then innertext
            // console.log(
            //     boxes[pattern[0]].innerText,
            //     boxes[pattern[1]].innerText,
            //     boxes[pattern[2]].innerText
                // to store value in position and calculate store in a variable
            // );
        // }
    // };
    // to store value in position and calculate store in a variable
    // to diable button if winner show
    const disableBoxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    }
    const ensableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            // to remove input value
            box.innerText="";
        }
    }

    // to shwo winner
    const showWinner=(wi)=>{
        msg.style.color = "rgb(3, 126, 15)";
        msg.innerText=`😀Congratulations My Dear Winner is ${wi}`;
        // we hide the text its enable when winner announce that is why below line meaning
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
    const checkWinner=()=>{
        for(let pattern of winPatterns){
            pos1Val=boxes[pattern[0]].innerText,
            pos2Val=boxes[pattern[1]].innerText,
            pos3Val=boxes[pattern[2]].innerText
                // if postion 1 fill but positon 2 and 3 is empty then o cannot win
                if(pos1Val !="" && pos2Val!=""&&pos3Val!=""){
                    if(pos1Val===pos2Val && pos2Val=== pos3Val){
                        // console.log("winner",pos1Val); 
                        // to show winner
                        showWinner(pos1Val);
                    }
                }
        }};

        newGameBtn.addEventListener("click",resetGame);
        resetBt.addEventListener("click",resetGame);


