import Player from "./components/Player.tsx";
import {INITIAL_PLAYERS} from "./constants.ts";
import './App.css'

function App() {
    return (
        <main id="game-container">
            <ol id="players">
                {
                    INITIAL_PLAYERS.map(player => {
                        return (
                            <Player key={player.symbol} symbol={player.symbol} name={player.name}/>
                        )
                    })
                }
            </ol>
        </main>
    )
}

export default App
