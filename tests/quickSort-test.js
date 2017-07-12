import { expect } from 'chai';
import quickSort from '../scripts/quickSort.js'
import generateRandomArray from '../scripts/generateRandomArray'


describe('quickSort', () => {

  it('Should be a function', () => {
    expect(quickSort).to.be.a.function
  })
  it('Should be able to sort an array of one', () => {
    let numbers = [1]
    let sorted = quickSort(numbers)
    expect(sorted).to.deep.equal([1])
  })
  it('Should be able to sort positive and negative numbers', () => {
    let numbers = [1, 10, -5, -15]
    let sorted = quickSort(numbers)
    expect(sorted).to.deep.equal([-15, -5, 1, 10])
  })
  it('Should be able to sort letters', () => {
    let letters = ["d", "b", "a", "c"]
    let sorted = ["a", "b", "c", "d"]
    expect(quickSort(letters)).to.deep.equal(sorted)
  })
  it('Should be able to sort an array of any length', () => {
    let randomArray = generateRandomArray(50000);
    let sortedWithSort = [...randomArray].sort((a, b) => a - b);
    expect(quickSort(randomArray)).to.deep.equal(sortedWithSort)
  })
})
