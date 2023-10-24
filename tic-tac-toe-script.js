const board = document.getElementById('board');

const status = document.getElementById('status');

const resetButton = document.getElementById('reset');

const ticTacToe = document.getElementById('ticTacToe');



let currentPlayer = 'X';

let gameBoard = ['', '', '', '', '', '', '', '', ''];

let gameActive = true;



// Event listener for cell clicks

board.addEventListener('click', handleCellClick);



// Event listener for reset button

resetButton.addEventListener('click', resetGame);



// Initial render of the game board

renderBoard();



// Function to handle cell clicks

function handleCellClick(event) {

    const cell = event.target;

    const cellIndex = parseInt(cell.getAttribute('data-index'));



    if (gameBoard[cellIndex] === '' && gameActive) {

        gameBoard[cellIndex] = currentPlayer;

        cell.textContent = currentPlayer;

        cell.classList.add('cell-' + currentPlayer);



        if (checkWin()) {

            status.textContent = `Player ${currentPlayer} wins!`;

            gameActive = false;

        } else if (gameBoard.includes('')) {

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            status.textContent = `Player ${currentPlayer}'s turn`;

        } else {

            status.textContent = "It's a draw!";

            gameActive = false;

        }

    }

}



// Function to check for a win

function checkWin() {

    const winningCombos = [

        [0, 1, 2], [3, 4, 5], [6, 7, 8],

        [0, 3, 6], [1, 4, 7], [2, 5, 8],

        [0, 4, 8], [2, 4, 6]

    ];



    for (const combo of winningCombos) {

        const [a, b, c] = combo;

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {

            return true;

        }

    }



    return false;

}



// Function to reset the game

function resetGame() {

    currentPlayer = 'X';

    gameBoard = ['', '', '', '', '', '', '', '', ''];

    gameActive = true;

    status.textContent = "Player X's turn";

    ticTacToe.classList.remove('game-over');



    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {

        cell.textContent = '';

        cell.classList.remove('cell-X', 'cell-O');

    });

}



// Function to render the game board

function renderBoard() {

    for (let i = 0; i < 9; i++) {

        const cell = document.createElement('div');

        cell.classList.add('cell');

        cell.setAttribute('data-index', i);

        board.appendChild(cell);

    }

}

                              const board = document.getElementById('board');

const status = document.getElementById('status');

const resetButton = document.getElementById('reset');

const ticTacToe = document.getElementById('ticTacToe');



let currentPlayer = 'X';

let gameBoard = ['', '', '', '', '', '', '', '', ''];

let gameActive = true;



// Event listener for cell clicks

board.addEventListener('click', handleCellClick);



// Event listener for reset button

resetButton.addEventListener('click', resetGame);



// Initial render of the game board

renderBoard();



// Function to handle cell clicks

function handleCellClick(event) {

    const cell = event.target;

    const cellIndex = parseInt(cell.getAttribute('data-index'));



    if (gameBoard[cellIndex] === '' && gameActive) {

        gameBoard[cellIndex] = currentPlayer;

        cell.textContent = currentPlayer;

        cell.classList.add('cell-' + currentPlayer);



        if (checkWin()) {

            status.textContent = `Player ${currentPlayer} wins!`;

            gameActive = false;

        } else if (gameBoard.includes('')) {

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            status.textContent = `Player ${currentPlayer}'s turn`;

        } else {

            status.textContent = "It's a draw!";

            gameActive = false;

        }

    }

}



// Function to check for a win

function checkWin() {

    const winningCombos = [

        [0, 1, 2], [3, 4, 5], [6, 7, 8],

        [0, 3, 6], [1, 4, 7], [2, 5, 8],

        [0, 4, 8], [2, 4, 6]

    ];



    for (const combo of winningCombos) {

        const [a, b, c] = combo;

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {

            return true;

        }

    }



    return false;

}



// Function to reset the game

function resetGame() {

    currentPlayer = 'X';

    gameBoard = ['', '', '', '', '', '', '', '', ''];

    gameActive = true;

    status.textContent = "Player X's turn";

    ticTacToe.classList.remove('game-over');



    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {

        cell.textContent = '';

        cell.classList.remove('cell-X', 'cell-O');

    });

}



// Function to render the game board

function renderBoard() {

    for (let i = 0; i < 9; i++) {

        const cell = document.createElement('div');

        cell.classList.add('cell');

        cell.setAttribute('data-index', i);

        board.appendChild(cell);

    }

}

