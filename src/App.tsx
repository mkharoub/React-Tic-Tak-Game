import {useState} from "react";

import Player from "./components/Player.tsx";
import Board from "./components/Board.tsx";
import GameOver from "./components/GameOver.tsx";
import {deriveWinner} from "./helpers.ts";
import {INITIAL_BOARD, INITIAL_PLAYERS} from "./constants.ts";
import './App.css'

function App() {
    const [activePlayer, setActivePlayer] = useState(INITIAL_PLAYERS[0].symbol);
    const [board, setBoard] = useState<any[]>(INITIAL_BOARD);
    const winner = deriveWinner(board);
    const hasDraw = !winner && board.map(inner => {
        return inner.reduce((acm: any, curr: any) => acm + (curr ? 1 : 0), 0)
    }).reduce((acm, curr) => acm + curr, 0) === 9;


    function handleBoardClick(rowIndex: number, columnIndex: number) {
        if (board[rowIndex][columnIndex]) {
            return;
        }

        let active = INITIAL_PLAYERS[0].symbol;
        if (activePlayer === active) active = INITIAL_PLAYERS[1].symbol;

        setActivePlayer(active);
        setBoard(prevState => {
            const prevBoard = [...prevState.map(board => [...board])];
            prevBoard[rowIndex][columnIndex] = activePlayer;
            return prevBoard;
        });
    }

    function handleRematch() {
        setBoard(INITIAL_BOARD);
        setActivePlayer(INITIAL_PLAYERS[0].symbol);
    }

    return (
        <main id="game-container">
            <ol id="players" className="highlight-player">
                {
                    INITIAL_PLAYERS.map(player => {
                        return (
                            <Player key={player.symbol}
                                    symbol={player.symbol}
                                    name={player.name}
                                    activePlayer={activePlayer}
                            />
                        )
                    })
                }
            </ol>
            <Board activePlayer={activePlayer} board={board} onBoardClick={handleBoardClick}/>
            {(winner || hasDraw) && <GameOver winner={winner} hasDraw={hasDraw} onRematch={handleRematch}/>}
        </main>
    )
}

export default App
