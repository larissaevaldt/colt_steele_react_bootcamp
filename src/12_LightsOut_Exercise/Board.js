import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
    static defaultProps = {
        nRows: 5,
        nCols: 5,
        chanceLightStartsOn: 0.25
    }

    constructor(props) {
        super(props);

        // TODO: set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard()
        }
    }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    createBoard() {
        let board = [];
        // TODO: create array-of-arrays of true/false values
        for(let y = 0; y < this.props.nRows; y++) {
            let row=[];
            for(let x = 0; x < this.props.nCols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
    }

  /** handle changing a cell: update board & determine if winner */

    flipCellsAround(coord) {
    
        console.log("Flipping!", coord);

        let {nCols, nRows} = this.props;
        let board = this.state.board;
        //splits the coord string passed in, turning it into 2 numbers and saving into x and y
        let [y, x] = coord.split("-").map(Number);


        function flipCell(y, x) { 
            // if this coord is actually on board, flip it. 
            //Checks if it's a valid number, if we are not trying to flip coord 10-10 in a 5-5 board
            if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
                board[y][x] = !board[y][x];
            }
        }

        // TODO: flip this cell and the cells around it
        flipCell(y,x); //Flip initial cell
        flipCell(y, x - 1); //flip left
        flipCell(y, x + 1); //flip right
        flipCell(y - 1, x); //flip below
        flipCell(y + 1, x); //flip above

        // win when every cell is turned off
        // TODO: determine is the game has been won
        
        //iterate through every cell checking if they are all set to false
        let hasWon = board.every(row => row.every(cell => !cell));

        //update state
        this.setState({board, hasWon});
    }

    // TODO
    // make table board
    makeTable() {
        let tblBoard = [];
        for (let y = 0; y < this.props.nRows; y++) {
            let row = [];
            for (let x = 0; x < this.props.nCols; x++) {
                let coord = `${y}-${x}`
                row.push(<Cell key={coord} isLit={this.state.board[y][x]} flipCellsAroundMe={() => this.flipCellsAround(coord)}/>);
            }
            tblBoard.push(<tr key={y}>{row}</tr>)
        }
        return tblBoard;
    }

  /** Render game board or winning message. */

    render() {
        
        return(
            <div className="App">
                {/* if the game is won, just show a winning msg & render nothing else */}
                {this.state.hasWon ? (
                    <div className="winner">
                        <span className="neon-orange">YOU</span>
                        <span className="neon-blue">WIN!</span>
                    </div>
                ) : (
                    <div>
                        <div className="Board-title">
                            <div className="neon-orange">Lights </div>
                            <div className="neon-blue">Out</div>
                        </div>
                        <table className="Board">
                            <tbody>
                                {this.makeTable()}
                            </tbody>
                        </table>
                    </div>    
                )} 
            </div>
        );

    }
0 
}

export default Board;
