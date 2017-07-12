const generateRandomArray = (index) => {
  let randomArray = [];
  for(let i = 0; i < index; i++){
    let randomNum = Math.floor(Math.random() * index)
    randomArray.push(randomNum)
  }
  return randomArray;
}

export default generateRandomArray
