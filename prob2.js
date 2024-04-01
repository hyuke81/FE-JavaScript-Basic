/* 2번 문제 답안을 작성해주세요. */
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