import {useState} from "react";

const Player = (props: any) => {
    const {symbol, name, activePlayer, onPlayerNameChange} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleToggleSaveEdit() {
        setIsEditing(prevState => !prevState);

        if (isEditing) {
            onPlayerNameChange(symbol, playerName);
        }
    }

    function handleEditName(e: any) {
        setPlayerName(e.target.value)
    }

    let player = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        player = <input type="text" onInput={handleEditName} value={playerName}/>
    }

    return (
        <li className={activePlayer === symbol ? 'active' : ''}>
            <span className="player">
                {player}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleToggleSaveEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;