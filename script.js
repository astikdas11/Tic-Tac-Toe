let button=document.querySelectorAll(".btn");
let gameBody= document.querySelector(".game-body");
let turn=true;


const disButton = () => {
    for (const btn of button) {
        btn.disabled = true;
    }

    gameBody.classList.add("hide");

    document.querySelector(".winmsg").classList.add("show");
};


let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7]
]



button.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(turn){
            btn.innerText="X";
            turn=false;
        }
        else{
            btn.innerText="0";
            turn =true;
        }
        btn.disabled=true;
        checkWinner();
    });
});


const checkWinner = () => {
    for (const pattern of winPattern) {
        const pos1val = button[pattern[0]].innerText;
        const pos2val = button[pattern[1]].innerText;
        const pos3val = button[pattern[2]].innerText;

        if (
            pos1val !== "" &&
            pos1val === pos2val &&
            pos2val === pos3val
        ) {
            document.querySelector(".msg").innerText =
                `Hurrah!! ${pos1val} wins!`;

            disButton();
            return;
        }
    }
};