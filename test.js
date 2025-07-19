const add = require('./index');

test('suma de 2 y 3 es 5', () => {
    expect(add(2, 3)).toBe(5);
});
