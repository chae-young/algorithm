const fs = require('fs');
const input = fs.readFileSync(__dirname + '/4963_섬의개수.txt').toString().trim().split('\n');

function dfs(x, y, h, w, grid) {
    if (x < 0 || x >= h || y < 0 || y >= w || grid[x][y] === 0) {
        return;
    }

    grid[x][y] = 0; // 방문한 지점을 0으로 표시

    // 8방향을 모두 탐색
    const dx = [-1, 1, 0, 0, -1, 1, -1, 1];
    const dy = [0, 0, -1, 1, -1, -1, 1, 1];

    for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        dfs(nx, ny, h, w, grid);
    }
}

let index = 0;

while (true) {
    const [w, h] = input[index].split(' ').map(Number);
    if (w === 0 && h === 0) {
        break; // 입력의 끝
    }

    const grid = [];
    for (let i = 1; i <= h; i++) {
        grid.push(input[index + i].split(' ').map(Number));
    }

    let islandCount = 0;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 1) {
                islandCount++;
                dfs(i, j, h, w, grid);
            }
        }
    }

    console.log(islandCount);
    index += h + 1; // 다음 테스트 케이스 시작 지점으로 이동
}
