const Board = (props: any) => {
    const {onBoardClick, board} = props;

    return (
        <div id="game-board">
            <ol>
                {
                    board.map((row: any, rowIndex: number) => {
                        return (
                            <li key={rowIndex}>
                                <ol>
                                    {
                                        row.map((column: any, columnIndex: number) => {
                                            return (
                                                <li key={columnIndex}>
                                                    <button onClick={() => onBoardClick(rowIndex, columnIndex)} disabled={!!board[rowIndex][columnIndex]}>
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