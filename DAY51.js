// 몫 구하기
// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
// Math.floor 외우기

function solution(num1, num2) {
    let answer = 0;
    answer = num1 / num2;
    return Math.floor(answer);
}