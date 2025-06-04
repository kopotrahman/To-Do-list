let flag=false;
var a=document.querySelectorAll(".btn");
a.forEach((element,i)=>{
    element.addEventListener("click",  function(){
        element.style.backgroundColor = "black";
        element.style.color = "white";
        a[i].disabled=true;
        if(flag==false){
            element.innerHTML="X";
            flag=true;
        }
        else{
            element.innerHTML="O";
            flag=false;
        }
        checkWinner();
    })
});

/**
 * Checks if the game has a winner or is a tie.
 * @returns {boolean} True if the game is over, false otherwise.
 */
function checkWinner() {
    // Create a board state object
    const board = {};
    a.forEach(btn => {
        board[btn.id] = btn.innerHTML;
    });

    const winConditions = [
        ["11", "12", "13"], // top row
        ["21", "22", "23"], // middle row
        ["31", "32", "33"], // bottom row
        ["11", "21", "31"], // left column
        ["12", "22", "32"], // middle column
        ["13", "23", "33"], // right column
        ["11", "22", "33"], // diagonal
        ["13", "22", "31"]  // anti-diagonal
    ];

    // Check each win condition
    for (const condition of winConditions) {
        const [pos1, pos2, pos3] = condition;
        if (board[pos1] && 
            board[pos1] === board[pos2] && 
            board[pos1] === board[pos3]) {
            alert(`Player ${board[pos1] === "X" ? "1" : "2"} wins!`);
            window.location.reload();
            return true;
            
        }
    }

    // Check for tie
    if (Object.values(board).every(cell => cell !== "")) {
        alert("It's a tie!");
        return true;
    }

    return false;
}