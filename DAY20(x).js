// 올바른 괄호
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

//스택으로 풀면되는데 처음에는 처음 시작이 ( 이 아니거나 마지막이 ) 가 아니면 false 하나 (의 갯수와 )의 갯수의 갯수가 같지 않으면 false 면 모두 돌꺼
//라고 생각했는데 5번 11번이 문제였고 그냥 let answer  = false 해보니 5랑 11번은 false에 해당되는 문제였고 생각해보니 ()))(()) 는 시작도 끝도
// () 로 시작과 끝이고 (와 )의 갯수또한 일치하지만 올바른 ()의 형태는 아닌 예외를 찾았다. 결국 혼자 해결하지 못하였고, 다른사람들의 정답을 보고 해결했다.
// '열고 닫는다'가 문제의 핵심인데 나는 그냥 시작 과 끝 안의 갯수 문제의 핵심을 파악하지 못하고 테스트케이스를 통과하는것에 급급했던거같다.
// 하지만 덕분에 stack과 queue 의 자료 구조도 공부 할 수 있었고, 문제의 핵심! 을 파악하자는 생각도 할 수 있어서 좋았다.

function solution(s) {
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === "(" ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}
ㅇ;
