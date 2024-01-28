function Log(props: any) {
    const {turns} = props;

    return (
        <div id="log">
            <ol>
                {
                    turns.map((turn: any) => {
                        return (
                            <li key={`${turn.row}_${turn.column}`}>
                                {turn.player} Selected {turn.row}, {turn.column}
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Log;