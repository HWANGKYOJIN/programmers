// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
// 나중에 Math를 이용해서도 풀어보기. 활용 Math.abs()
function solution(a, b) {
  let answer = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    return a;
  }
  return answer;
}
