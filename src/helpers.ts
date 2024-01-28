import {INITIAL_BOARD, INITIAL_PLAYERS, WINNING_COMBINATIONS} from "./constants.ts";

export const deriveWinner = (board: any[], players: any[]) => {
    let winner: any;
    for (const combination of WINNING_COMBINATIONS) {
        const first = board[combination[0].row][combination[0].column];
        const second = board[combination[1].row][combination[1].column];
        const third = board[combination[2].row][combination[2].column];

        if (first && first === second && first === third) winner = first;
    }

    if (winner) {
        winner = players.find(player => player.symbol === winner).name;
    }

    return winner;
}

export function deriveActivePlayer(turns: any[]) {
    let activePlayer = INITIAL_PLAYERS[0].symbol;
    if (turns.length && turns[0].player === activePlayer) {
        activePlayer = INITIAL_PLAYERS[1].symbol;
    }

    return activePlayer;
}

export function deriveBoard(turns: any[]) {
    let board = [...INITIAL_BOARD.map(inner => [...inner])];
    if (turns.length) {
        for(const turn of turns) {
            board[turn.row][turn.column] = turn.player;
        }
    }

    return board;
}