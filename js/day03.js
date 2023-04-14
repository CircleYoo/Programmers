(function () {
    'use strict'
    // 코드를 전부 이 안에 작성한다.

    // 📌중앙값 구하기
    // 주어진 값을 크기순으로 정렬했을 때, 가장 중앙에 위치하는 값
    const arr = [1, 2, 7, 3, 10, 11] 
    arr.sort()
    // [1, 10, 11, 2, 3, 7] -- 엥?(유니코드 순)

    // 크기 순 정렬
    arr.sort(function (a, b) {
        return a - b;
    })
    console.log(arr)

    function solution(arr) {
        let answer = 0
        
        return answer;
    }

    console.log(solution())
})();