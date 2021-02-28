interface Player_I {
    name: string,
    games: number,
    wins: number,
    losses: number,
    currentSide:string 
}


export const player1:Player_I = {
    name: 'Nikita',
    games: 0,
    wins: 0,
    losses: 0,
    currentSide: "X"
}

export const player2:Player_I = {
    name: 'Max',
    games: 0,
    wins: 0,
    losses: 0,
    currentSide: "O"
}