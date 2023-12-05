// 더이상 갈때가 없으면 돌아갔다가 갈때없으면 돌아갔다~ 탐색. 한곳을 깊숙히 파고듬. 한곳에서 답이 있으면 빠르지만 답이 멀리있으면 느리다.
/* 
1. 루트 노드를 시작으로 함수 호출
2. 현재 노드가 이미 방문한 노드인 경우 이미 탐색을 했는 노드이므로 리턴
3. 현재 노드가 방문하지 않은 오느인 경우 방문 표시
4. 현재 노드와 연결되어 있는 인접 노드에 대해 재귀적으로 함수를 호출하며 탐색
*/
/* 
n개의 정점의 쌍 u,v과 정점의 수 m이 주어질때 그래프를 만들어 dfs 탐색 순서를 나타내보자

입력
12 13
1 2
1 3
1 4
3 5
3 6
5 7
5 8
6 9
9 10
9 11
10 12
10 13

출력
1 2 3 5 7 8 6 9 10 12 13 11 4
*/

function dfs(graph,visit,cur){
    if(visit[cur]){
        return;
    }
    visit[cur] = 1;
    graph[cur].forEach((next) => dfs(graph,visit,next))
}

let N = 12;
let M = 13;

let graph = Array.from({length: M + 1}, () => {
    return []
})
let visit = Array.from({length : M + 1}, () => 0)

graph[1].push(2);
graph[1].push(3);
graph[1].push(4);
graph[3].push(5);
graph[3].push(6);
graph[5].push(7);
graph[5].push(8);
graph[6].push(9);
graph[9].push(10);
graph[9].push(11);
graph[10].push(12);
graph[10].push(13);

dfs(graph,visit,1);
console.log(graph)


/* 
자연수 n과 m이 주어질때 1부터 n까지의 수중에서 m개를 고른 수열을 만들어보자
(중복안됨)
4 2
*/

function dfs(n,m,ans){
    if(ans.length === m){
        console.log(ans)
        return
    }

    for(let i = 1; i <= n; i++){
        ans.push(i);
        dfs(n,m,ans);
        ans.pop();
    }
}

let [n,m] = [4,2]

dfs(n,m,[])

