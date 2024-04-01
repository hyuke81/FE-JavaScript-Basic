function solution(arr) {
    if (arr.length === 1){
        return [-1];
    }
    else{
        const arr1 = Math.min(...arr);
        arr.splice(arr.indexOf(arr1),1);
        return arr;
    }
}