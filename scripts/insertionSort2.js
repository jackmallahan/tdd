const letters = ["d", "b", "a", "c"]

const insertionSort = array => {

  for(let i = 0; i < array.length; i++){
    let j = i - 1
    while(j >= 0 && array[j] > array[i]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]]
      i--;
      j = i - 1;
    }
  }
  return array;
}

insertionSort(letters)
