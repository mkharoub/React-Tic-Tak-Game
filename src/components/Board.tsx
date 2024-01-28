import {useState} from "react";

const INITIAL_GAME_BOARD = [[null, null, null], [null, null, null], [null, null, null]];

const Board = (props: any) => {
    const {activePlayer, onSwitchPlayer} = props;
    const [board, setBoard] = useState<any[]>(INITIAL_GAME_BOARD);

    function handleBoardClick(rowIndex: number, columnIndex: number) {
        if (board[rowIndex][columnIndex]) {
            return;
        }

        setBoard(prevState => {
            const prevBoard = [...prevState.map(board => [...board])];
            prevBoard[rowIndex][columnIndex] = activePlayer;
            return prevBoard;
        });
        onSwitchPlayer();
    }

    return (
        <div id="game-board">
            <ol>
                {
                    board.map((row, rowIndex) => {
                        return (
                            <li key={rowIndex}>
                                <ol>
                                    {
                                        row.map((column: any, columnIndex: number) => {
                                            return (
                                                <li key={columnIndex}>
                                                    <button onClick={() => handleBoardClick(rowIndex, columnIndex)}>
                                                        {column}
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Board;