class TicTacToe {
    constructor() {
        this.currentPlayer = "x";
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.turns = 0;

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === "x" ? "o" : "x"; //надо присвоить по условию
            this.turns++;
            console.log(this.matrix);
        }

    }

    isFinished() {


    }

    getWinner() {
        if (
            (this.matrix[0][0] === 'x' && this.matrix[0][1] === 'x' && this.matrix[0][2] === 'x') ||
            (this.matrix[1][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[1][2] === 'x') ||
            (this.matrix[2][0] === 'x' && this.matrix[2][1] === 'x' && this.matrix[2][2] === 'x') ||
            //-----------------
            (this.matrix[0][0] === 'x' && this.matrix[1][0] === 'x' && this.matrix[2][0] === 'x') ||
            (this.matrix[0][1] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][1] === 'x') ||
            (this.matrix[0][2] === 'x' && this.matrix[1][2] === 'x' && this.matrix[2][2] === 'x') ||
            //-----------------
            (this.matrix[0][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][2] === 'x') ||
            (this.matrix[2][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[0][2] === 'x')) {
            return "x";
        }
        else if (
            (this.matrix[0][0] === 'o' && this.matrix[0][1] === 'o' && this.matrix[0][2] === 'o') ||
            (this.matrix[1][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[1][2] === 'o') ||
            (this.matrix[2][0] === 'o' && this.matrix[2][1] === 'o' && this.matrix[2][2] === 'o') ||
            //-----------------
            (this.matrix[0][0] === 'o' && this.matrix[1][0] === 'o' && this.matrix[2][0] === 'o') ||
            (this.matrix[0][1] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][1] === 'o') ||
            (this.matrix[0][2] === 'o' && this.matrix[1][2] === 'o' && this.matrix[2][2] === 'o') ||
            //-----------------
            (this.matrix[0][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][2] === 'o') ||
            (this.matrix[2][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[0][2] === 'o')) {
            return "o";
        }
        return null;
    }

    noMoreTurns() {
        this.turns === 9 ? true : false;

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
