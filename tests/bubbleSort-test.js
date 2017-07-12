import { expect, assert } from 'chai';
import bubble from '../scripts/bubbleSort'
import generateRandomArray from '../scripts/generateRandomArray'

describe('bubble', () => {

  it('Should be a function', () => {
    expect(bubble).to.be.a.function
  })
  it('Should only sort arrays', () => {;
    expect(bubble('string')).to.equal('string is not an array.')
  })
  it('Should be able to sort an array of one', () => {
    let numbers = [1]
    let sorted = bubble(numbers)
    expect(sorted).to.deep.equal([1])
  })
  it('Should be able to sort positive and negative numbers', () => {
    let numbers = [1, 10, -5, -15]
    let sorted = bubble(numbers)
    expect(sorted).to.deep.equal([-15, -5, 1, 10])
  })
  it('Should be able to sort letters', () => {
    let letters = ["d", "b", "a", "c"]
    let sorted = ["a", "b", "c", "d"]
    expect(bubble(letters)).to.deep.equal(sorted)
  })
  it('Should be able to sort an array of any length', () => {
    let randomArray = generateRandomArray(5000);
    let sortedWithSort = [...randomArray].sort((a, b) => a - b);
    expect(bubble(randomArray)).to.deep.equal(sortedWithSort)
  })
})
