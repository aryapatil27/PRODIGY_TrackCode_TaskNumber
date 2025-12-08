let boxes = document.querySelectorAll('.box');
let resetbutton = document.getElementById('resetbtn');
let newbutton = document.querySelector('.newbtn');

let turno = true; 
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

const winningpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winningpattern) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        // important fix: must check all are non-empty
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {

            // if all three match → winner found
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return; // stop checking once winner is found
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

newbutton.addEventListener("click", resetGame);
resetbutton.addEventListener("click", resetGame);
