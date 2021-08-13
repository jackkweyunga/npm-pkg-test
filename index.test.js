const { sayHellow } = require("./index")

it('should return void', () => {
    expect(sayHellow()).toBeUndefined();
});
