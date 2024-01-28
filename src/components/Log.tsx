function Log(props: any) {
    const {turns} = props;

    return (
        <div id="log">
            <ol>
                {
                    turns.map((turn: any, i: number) => {
                        return (
                            <li key={i}>{turn.player} Selected {turn.row}, {turn.column}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Log;