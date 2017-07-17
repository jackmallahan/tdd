import { expect, assert } from 'chai';
import mergeSort from '../scripts/mergeSort'
import generateRandomArray from '../scripts/generateRandomArray'

describe('mergeSort', () => {

  it('Should be a function', () => {
    expect(mergeSort).to.be.a.function
  })
  it('Should only sort arrays', () => {;
    expect(mergeSort('string')).to.equal('string is not an array.')
  })
  it('Should be able to sort an array of one', () => {
    let numbers = [1]
    let sorted = mergeSort(numbers)
    expect(sorted).to.deep.equal([1])
  })
  it.only('Should be able to sort positive and negative numbers', () => {
    let numbers = [1, 10, 5, 15, 8, 7, 4]
    let sorted = mergeSort(numbers)
    expect(sorted).to.deep.equal([-15, -5, 1, 10])
  })
  it('Should be able to sort letters', () => {
    let letters = ["d", "b", "a", "c"]
    let sorted = ["a", "b", "c", "d"]
    expect(mergeSort(letters)).to.deep.equal(sorted)
  })
  it('Should be able to sort an array of any length', () => {
    let randomArray = generateRandomArray(100000);
    let sortedWithSort = [...randomArray].sort((a, b) => a - b);
    expect(mergeSort(randomArray)).to.deep.equal(sortedWithSort)
  })
})
