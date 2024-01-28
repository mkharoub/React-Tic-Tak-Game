import {useState} from "react";

import Player from "./components/Player.tsx";
import Board from "./components/Board.tsx";
import GameOver from "./components/GameOver.tsx";
import {deriveActivePlayer, deriveBoard, deriveWinner} from "./helpers.ts";
import Log from "./components/Log.tsx";
import {INITIAL_PLAYERS} from "./constants.ts";
import './App.css'

function App() {
    const [players, setPlayers] = useState(INITIAL_PLAYERS);
    const [turns, setTurns] = useState<any[]>([]);
    const board = deriveBoard(turns);
    const winner = deriveWinner(board, players);
    const activePlayer = deriveActivePlayer(turns);
    const hasDraw = !winner && turns.length === 9;

    function handleBoardClick(rowIndex: number, columnIndex: number) {
        setTurns(prevState => {
            const turn = {
                player: activePlayer,
                row: rowIndex,
                column: columnIndex
            };

            return [turn, ...prevState];
        });
    }

    function handleRematch() {
        setTurns([]);
    }

    function handlePlayerNameChange(symbol: string, newName: string) {
        setPlayers(prevState => {
            return [...prevState.map(player => {
                if (player.symbol === symbol) {
                    return {
                        symbol,
                        name: newName
                    }
                }

                return {...player};
            })];
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    {
                        players.map(player => {
                            return (
                                <Player key={player.symbol}
                                        symbol={player.symbol}
                                        name={player.name}
                                        activePlayer={activePlayer}
                                        onPlayerNameChange={handlePlayerNameChange}
                                />
                            )
                        })
                    }
                </ol>
                <Board activePlayer={activePlayer} board={board} onBoardClick={handleBoardClick}/>
                {(winner || hasDraw) && <GameOver winner={winner} hasDraw={hasDraw} onRematch={handleRematch}/>}
            </div>
            <Log turns={turns}/>
        </main>
    )
}

export default App;
