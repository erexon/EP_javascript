function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({name: 'Alice', age: 25}));
console.log(objectToArray({city: 'New York', country: 'USA'}));
