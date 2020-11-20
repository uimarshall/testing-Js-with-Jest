const { add, mul, sub, div } = require('./math')

test('should Add 2+3 to equal 5', () => {
    expect(add(2,3)).toBe(5)
    
})
test('should subtract 8-6 to equal 2', () => {
    expect(sub(8,6)).toBe(2)
    
})
test('should multiply 2*5 to equal 10', () => {
    expect(mul(2,5)).toBe(10)
    
})
test('should divide 12/3 to equal 4', () => {
    expect(div(12,3)).toBe(4)
    
})
test('should didvide 2/3 to not to equal 5', () => {
    expect(div(2,3)).not.toBe(5)
    
})
test('should multiply 2*3 not to equal 7', () => {
    expect(mul(2,3)).not.toBe(7)
    
})
test('should Add 2+3 not to be equal 3', () => {
    expect(add(2,3)).not.toBe(3)
    
})
