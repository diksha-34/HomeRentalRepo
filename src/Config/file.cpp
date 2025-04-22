#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void dfs(int node, vector<vector<int>>& adj, vector<bool>& visited, vector<int>& arr, int& total) {
    visited[node] = true;
    total += arr[node];
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited, arr, total);
        }
    }
}

int fun(vector<int>& arr, vector<vector<int>>& edges) {
    // Create adjacency list for the graph
    vector<vector<int>> adj(8);
    for (const auto& edge : edges) {
        int u = edge[0] - 1; // Convert to 0-based index
        int v = edge[1] - 1; // Convert to 0-based index
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    // To keep track of visited nodes
    vector<bool> visited(8, false);

    // Find connected components and calculate the maximum money that can be pooled
    int max_money = 0;
    for (int i = 0; i < 8; i++) {
        if (!visited[i]) {
            int total = 0;
            dfs(i, adj, visited, arr, total);
            max_money = max(max_money, total);
        }
    }

    return max_money;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    // Read the money contributions for the 8 members
    vector<int> arr(8);
    for (int i = 0; i < 8; i++) {
        cin >> arr[i];
    }

    // Read the number of conflict pairs
    int P;
    cin >> P;

    // Read the conflict pairs
    vector<vector<int>> edges(P, vector<int>(2));
    for (int i = 0; i < P; i++) {
        cin >> edges[i][0] >> edges[i][1];
    }

    // Call the fun function
    int output = fun(arr, edges);

    // Output the result
    cout << output << "\n";

    return 0;
}
