const a= document.querySelectorAll(".btn"); //selecting all the buttons
flag=false; //flag to check whose turn
//event listener & change innerHTML

for(let i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        a[i].style.backgroundColor="pink";
        a[i].disable=true;
        if(flag==false){
            a[i].innerHTML="X";
            a[i].style.color="#ff6e47";
            flag=true;
        }
        else{
            a[i].innerHTML="O";
            a[i].style.color="yellowgreen";
            flag=false;
        }
        checkWinner();
    })
}

//function to check the winner using board object & winConditions Matrix
function checkWinner(){
const board={};
a.forEach(btn=>{
    board[btn.id]=btn.innerHTML;
})

const winConditions=[
    ["11","12","13"],
    ["21","22","23"],
    ["31","32","33"],
    ["11","21","31"],
    ["12","22","32"],
    ["13","23","33"],
    ["11","22","33"],
    ["13","22","31"]        
];

for(const condition of winConditions){
    const[pos1,pos2,pos3]=condition;
    if(board[pos1] && board[pos1]===board[pos2] && board[pos1]===board[pos3]){
        alert(`Player ${board[pos1]=== "X" ? "1" : "2"} wins!`);
        updateScore(board[pos1]=== "X" ? "1" : "2");
        window.location.reload();
        return true;
    }

}
if(Object.values(board).every(cell=>cell!=="")){
    alert("It's a tie!");
    return true;
}

};



function updateScore(player){
    const scoreElement=document.getElementById(`p${player}`);
    const currentScore=parseInt(scoreElement.textContent);
    scoreElement.textContent=currentScore+1;
}






