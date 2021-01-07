// This is without any template
#include <bits/stdc++.h>

using namespace std; 

long long N; 
string A, B; 

int main() {
    ios_base::sync_with_stdio(0); cin.tie();
    freopen("breedflip.in", "r", stdin);
    freopen("breedflip.out", "w", stdout);

    cin >> N >> A >> B;
    long long ans = 0;

    bool mis = false; 
    for (long long i = 0; i < N; i++) {
        if (A[i] != B[i]) {
            if (!mis) {
                mis = true; 
                ans++;
            }
        } else {
            mis = false;
        }
    }

    cout << ans << endl;
}
