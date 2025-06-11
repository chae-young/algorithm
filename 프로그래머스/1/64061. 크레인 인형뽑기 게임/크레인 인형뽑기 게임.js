function solution(board, moves) {
    const stack = [];
    let result = 0;

    for(let i = 0; i < moves.length; i++) {
        const col = moves[i] - 1;

        for(let row = 0; row < board.length; row++) {
            const doll = board[row][col];
            if(doll !== 0 && stack[stack.length - 1] === doll) {
                stack.pop();
                result += 2;
                board[row][col] = 0;
                break;
            }
            if(doll !== 0) {
                stack.push(doll);
                board[row][col] = 0;
                break;
            }
        }
    }
    
    return result;
}
