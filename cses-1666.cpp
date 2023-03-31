#include <cstdio>

#include <vector>
#include <queue>


const int MN = 1e5 + 10;


int N, M, ans, rep[MN];

std::vector<int> adj_list[MN];

bool visited[MN];


void bfs(int node) {
    
    std::queue<int> q;
    q.push(node);
    visited[node] = true;
    
    while(!q.empty()){
        int curr = q.front();
        q.pop();
        
        for(int u : adj_list[curr]){
            if(!visited[u]){
                q.push(u);
                visited[u] = true;
            }
        }
    }
}

int count_components() {

    int count = 0;

    for (int i = 1; i <= N; ++i)

        if (!visited[i]){

            rep[count++] = i;

            bfs(i);

        }

    return count;

}


int main() {

    scanf("%d%d", &N, &M);

    for (int i = 0, u, v; i < M; ++i)

        scanf("%d%d", &u, &v), adj_list[u].push_back(v),

            adj_list[v].push_back(u);

    ans = count_components();

    printf("%d\n", ans - 1);

    for (int i = 1; i < ans; ++i) printf("%d %d\n", rep[i - 1], rep[i]);

    return 0;

}

 
