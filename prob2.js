function solution(n) {
    let sum = 1;
    let a = 1;
    while (a<=10){
        sum = a*sum;
        if (sum > n){
            return a-1;
        } 
        if (sum === n){
            return a;
        }
        a++;
    }
}