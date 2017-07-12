import { expect, assert } from 'chai';
import insertionSort from '../scripts/insertionSort'
import generateRandomArray from '../scripts/generateRandomArray'

describe('insertionSort', () => {

  it('Should be a function', () => {
    expect(insertionSort).to.be.a.function
  })
  it('Should only sort arrays', () => {;
    expect(insertionSort('string')).to.equal('string is not an array.')
  })
  it('Should be able to sort an array of one', () => {
    let numbers = [1]
    let sorted = insertionSort(numbers)
    expect(sorted).to.deep.equal([1])
  })
  it('Should be able to sort positive and negative numbers', () => {
    let numbers = [1, 10, -5, -15]
    let sorted = insertionSort(numbers)
    expect(sorted).to.deep.equal([-15, -5, 1, 10])
  })
  it('Should be able to sort letters', () => {
    let letters = ["d", "b", "a", "c"]
    let sorted = ["a", "b", "c", "d"]
    expect(insertionSort(letters)).to.deep.equal(sorted)
  })
  it('Should be able to sort an array of any length', () => {
    let randomArray = generateRandomArray(5000);
    let sortedWithSort = [...randomArray].sort((a, b) => a - b);
    expect(insertionSort(randomArray)).to.deep.equal(sortedWithSort)
  })
})
