function sumTwoSmallestNumbers(numbers) {  
  //Code here 
  let lowest = Math.min(numbers[0], numbers[1]), 
      secondLowest = Math.max(numbers[0], numbers[1])
  for(let i = 2; i < numbers.length; i++){
    if (numbers[i] < lowest){
      secondLowest = lowest
      lowest = numbers[i]
    } else if (numbers[i] < secondLowest)
      secondLowest = numbers[i]
    else continue
  }
  return lowest + secondLowest
  }
