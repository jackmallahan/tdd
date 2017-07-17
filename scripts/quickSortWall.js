const quickSort = (array) => {
  let p = array[array.length - 1]
  let middle = array[p]
  let left = []
  let right = []
  let j = 0
  let i = -1
  while(array.length > 1) {
    if(array[j] >= p) {
      j++
    } else if (array[j] < p) {
      i++
      [array[i], array[j]] = [array[j], array[i]]
      j++
    }
    [array[p], array[i] ] = [array[i], array[p]]
    console.log(array)
      p = i;
      right = array.splice(p + 1)
      left = array.splice(0, p)
    }
  return [...quickSort(left), p, ...quickSort(right)]
}
