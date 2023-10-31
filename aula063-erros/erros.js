function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try {
console.log(soma(5, 6));
console.log(soma('2', 5));
} catch(error) {
    console.log(error);
}