// Ejercicio 1

function findFirstRepeated(gifts) {
    // Variable const
    const mySet = new Set();
    for (let i = 0; i < gifts.length; i++) {
        if (mySet.has(gifts[i])) {
            return gifts[i];
        } else {
            mySet.add(gifts[i]);
        }
    }
    // Si en el array no hay ningun nro repetido, retorna -1.
    return -1;
}

const gifts = [4, 1, 4, 2];
console.log(findFirstRepeated(gifts));