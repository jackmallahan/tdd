const bubble = array => {
  if(Array.isArray(array)){
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
} else {
  return `${array} is not an array.`
  }
}

export default bubble