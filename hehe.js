const rockPaperScissors = function (num, arr) {
    let choices = ['rock', 'paper', 'scissors']
    num = num || 3
    arr = arr || [[0], [1], [2]]
    let result = []
    if (num === 1) { return arr.map(function(arr){
      return arr.map(x => choices[x])
      })
    }
      for (let j = 0; j < arr.length; j++){
        for(let i = 0; i < 3; i++){
          result.push([...arr[j], i])
        }
    }
    return rockPaperScissors(num-1, result)
  }