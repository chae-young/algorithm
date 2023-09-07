

/* ----다른 풀이----- */
// 가운데에 노란색 격자가 위치하려면. 가로 세로가 3이상이어야 한다.

function solution(brown, yellow) {
    const answer = [0, 0];
    const sum = brown + yellow;

    for (let i = 3; i < sum; i++) {
        const j = sum / i;

        // sum의 약수이고 3이상인것!
        if (sum % i === 0 && j >= 3) {
            const col = Math.max(i, j);
            const row = Math.min(i, j);
            const center = (col - 2) * (row - 2);

            // 노란색 격자가 yellow의 개수만큼. 가운데의 위치할수 있는지
            if (center === yellow) {
                answer[0] = col;
                answer[1] = row;
                return answer;
            }
        }
    }
    return answer;
}