const GameOver = (props: any) => {
    const {winner, hasDraw, onRematch} = props;

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {hasDraw && <p>It's draw!</p>}
            {winner && <p>{winner} won!</p>}
            <button onClick={onRematch}>Rematch</button>
        </div>
    )
}

export default GameOver;