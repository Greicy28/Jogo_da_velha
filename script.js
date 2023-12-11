alert("Bora Jogar?");
var player="X";
function changePlayer(){
    if(player==="X"){
        player="O";
    }else{
        player="X";
    }
}
function handleClick(event){
    var cell=event.target;
    cell.textContent=player;
    changePlayer();
    checkWin();
}
var cells=document.querySelectorAll("td");
for(var i= 0;i<cells.length;i++){
    cells[i].addEventListener("click",handleClick);
}
function clearTable() {
    var table = document.querySelector("table");
    var rows = table.rows;
    for (var i = 0; i < rows.length; i++) {
      rows[i].innerHTML = "";
    }
    player = "X";
    cells.forEach(function(cell) {
        cell.textContent = "";
        cell.classList.remove("win");
    });
}

function checkWin(){
    var combinações=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
    for(var i=0;i<combinações.length;i++){
        if(cells[combinações[i][0]].textContent===player &&
           cells[combinações[i][1]].textContent === player &&
           cells[combinações[i][2]].textContent === player)  
        {
            cells[combinações[i][0]].classList.add("win");
            cells[combinações[i][1]].classList.add("win");
            cells[combinações[i][2]].classList.add("win");
            alert("Você ganhou!");
            return true;
        }
    }
    if ([].every.call(cells, function(cell) { return cell.textContent !== ""; })) {
        alert("Deu velha!");
        return true;
    }

    return false;
}
