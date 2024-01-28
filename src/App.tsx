import {useState} from "react";

import Player from "./components/Player.tsx";
import {INITIAL_PLAYERS} from "./constants.ts";
import Board from "./components/Board.tsx";
import './App.css'

function App() {
    const [activePlayer, setActivePlayer] = useState(INITIAL_PLAYERS[0].symbol);

    function handleSwitchPlayer () {
        let active = INITIAL_PLAYERS[0].symbol;
        if (activePlayer === active) active = INITIAL_PLAYERS[1].symbol;

        setActivePlayer(active);
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
            <Board activePlayer={activePlayer} onSwitchPlayer={handleSwitchPlayer}/>
        </main>
    )
}

export default App
