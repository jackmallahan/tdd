const insertionSort = array => {
if(Array.isArray(array)){
  for (let i = 0; i < array.length; i++) {
    let j = i - 1
    while(array[j] > array[i]) {
      [array[j], array[j+1]] = [array[j+1], array[j]]
      i--
      j = i - 1
    }
  }
  return array
} else {
  return `${array} is not an array.`
  }
}

export default insertionSort
