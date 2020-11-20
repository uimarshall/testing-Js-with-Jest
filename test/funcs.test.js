const {caps,upperCase,reverseString,creatUser, includeItem} = require('./funcs');

test('should change str to capitalize ', () => {
     expect(caps("ekemini")).toBe("EKEMINI")
    
});
test('should change str to capitalize first letter ', () => {
     expect(upperCase("ekemini")).toBe("Ekemini")
    
});
test('should reverse str', () => {
     expect(reverseString("ekemini")).toBe("inimeke")
    
});
test('should create u user with name  Marshall Akpan', () => {
     expect(creatUser()).toEqual({
         firstName: 'Marshall',
         lastName: 'Udoh'
     })
    
});
test('should include Fred', () => {
     expect(includeItem()).toContain('Fred')
    
});
test('should be defined', () => {
     expect(includeItem()).toBeDefined ()
    
});