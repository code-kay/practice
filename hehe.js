const rockPaperScissors = function (num, arr) {
  // 1. 재귀
  // 2. 종료되는 조건 => rounds가 1이 될 때
  // 3. 재귀 실행시 마다 round—
  // 4. c[주먹], [가위], [보] => res 배열 안에 push
  // 5. Rounds 가 2인 경우 [주먹, 주먹] , [주먹, 가위], [주먹, 보], [가위, 주먹 —
  // 6. Rounds가 3이면 [주먹, 주먹, 주먹] 
  let choices = ['rock', 'paper', 'scissors']
  num = num || 3
  arr = arr || [[0], [1], [2]]
  let result = []
  
}