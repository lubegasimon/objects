var obj = {
    name: 'simon',
    age: 20,
    hobby: 'programming'
}

var newObj = Object.assign({}, obj);//it should take in 2 args(syntax) but one can as well live out the '{}'

console.log(newObj);
console.log("I'm " + newObj.age + " years old.");

var a = Object.getOwnPropertyDescriptor(newObj, 'name');  //describes the object property
console.log(a);

var obj1 = {};
Object.defineProperty(obj1, 'age', {value: 3});
console.log('New age value: ',obj1.age);


