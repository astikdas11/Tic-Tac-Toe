let button=document.querySelectorAll(".btn");
let turn=true;

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
    })
});

