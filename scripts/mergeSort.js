const mergeArrays = (array1, array2) => {
  let mergedArray = []
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] <= array2[0]) {
      mergedArray.push(array1.shift())
    } else if (array2[0] <= array1[0]) {
      mergedArray.push(array2.shift())
    }
  }
  mergedArray.push(...array1, ...array2)
  return mergedArray
}

const mergeSort = (array) => {
	let array1 = []
	let array2 = []

	if (array.length === 1) {
		return array

	} else if (array.length > 1) {
		array1 = array.splice(0,Math.floor(array.length/2))
		array2 = array.splice(0, array.length)
		array1 = mergeSort(array1)
		array2 = mergeSort(array2)
	}
	return mergeArrays(array1, array2)
}

export default mergeSort
