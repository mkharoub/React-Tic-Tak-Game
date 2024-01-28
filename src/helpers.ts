import {WINNING_COMBINATIONS} from "./constants.ts";

export const deriveWinner = (board: any[]) => {
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const first = board[combination[0].row][combination[0].column];
        const second = board[combination[1].row][combination[1].column];
        const third = board[combination[2].row][combination[2].column];

        if (first && first === second && first === third) winner = first;
    }

    return winner;
}