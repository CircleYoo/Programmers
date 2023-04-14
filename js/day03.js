(function () {
    'use strict'
    // 코드를 전부 이 안에 작성한다.

    console.log('-----중앙값-----')

    // 📌중앙값 구하기
    // 주어진 값을 크기순으로 정렬했을 때, 가장 중앙에 위치하는 값
    const arr = [1, 2, 7, 3, 10, 11] 
    arr.sort()
    // [1, 10, 11, 2, 3, 7] -- 엥?(유니코드 순)

    function solution(arr) {
        // 크기 순 정렬 (compareFuntion 개념)
        /*  
            (원리)
            • 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
            • 반환 값 < 0 : a와 b의 순서를 바꾸지 않는다.
            • 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
        */

        arr.sort(function(a, b) { return a - b; })
        let mid_num = Math.floor(arr.length/2)
        return arr[mid_num];
    }

    console.log(solution(arr))

    /*  (참고문서)
        Array.prototype.sort() - JavaScript MDN Mozilla
    */
    
    console.log('-----최빈값-----')
    
    // 📌 최빈값 구하기
    // 주어진 값 중에서 가장 자주 나오는 값 return( 최빈값이 여러 개면 return -1)
    const arr2 = [1, 2, 3, 3, 3, 4] 

    /*  
        (목표)
        • 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
        • 최빈값을 그때그때 기록한다.
    */
    
    function solution2(arr2) {
        // 1. 크기 순 정렬
        let sortedArr = arr2.sort((a, b) => a - b);
        let cnt = 0;

        let mode = -1       // 등장할 수 없는 값(현재 제한사항은 0부터 시작이라서 -1)
        let repeatModeCnt = 0   // 최빈값이 될 때, 몇번 반복했는지
        let repeatCnt = 0;      // 현재 동일한 숫자 반복 횟수
        let prevNum = -1;     // 이전 숫자(바뀌는 시점을 알아야해서)
        let isDupMode = false;

        while (cnt < arr2.length) {
            if (prevNum !== arr2[cnt]) {
                repeatCnt = 1;
            } else {
                repeatCnt += 1;
            }

            if (repeatCnt === repeatModeCnt) {
                if (mode !== arr2[cnt]) {
                    isDupMode = true;
                }
            }

            if (repeatCnt > repeatModeCnt) {
                // 최빈값이 바뀌는 순간
                mode = arr2[cnt];
                repeatModeCnt = repeatCnt;
                isDupMode = false;
            }
            prevNum = arr2[cnt]
            cnt += 1;
        }
        if (isDupMode) return -1;
        return mode;
    }
    console.log(solution2(arr2))


    console.log('-----짝수는 싫어-----')

    // 📌 짝수는 싫어요
    // 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return

    function solution3(n) {
        var answer = []
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 1) {
                answer.push(i)
            }
        }
        return answer;
    }
    console.log(solution3(15))
})();