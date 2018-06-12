var obj = {
    name: 'simon',
    age: 20,
    hobby: 'programming'
}

var newObj = Object.assign({}, obj);//it should take in 2 args(syntax) but one can as well live out the '{}'

console.log(newObj);
// console.log(obj);
console.log("I'm " + newObj.age + " years old.");

var a = Object.getOwnPropertyDescriptor(newObj, 'name');  //describes the object property
console.log(a);

var obj1 = {};
Object.defineProperty(obj1, 'age', {value: 3});
console.log('New age value: ',obj1.age);
// Object.defineProperty is mainly used to set properties with specific property descriptors

//...NOTE: A non-configurable property can not be deleted or altered with **defineProperty**.

var object1 = {
    property: 23,
}
// Object.seal(object1) //...Forbids to add/remove properties, sets for all existing properties configurable: false
Object.freeze(object1) //... Forbids to add/remove/change properties, sets for all existing properties configurable: false, writable: false.
// Object.preventExtensions(object1) //...Forbids to add properties to the object.

object1.property = 33
delete object1.property //...can not delete when sealed
// Object.defineProperty(object1, 'property1', {value: 33}) //can not define another prop since seal makes all existing props non-configurable
console.log(object1.property)

let user = { };

// Object.seal(user)
Object.defineProperty(user, "name", {
  value: "Pete",
  // for new properties need to explicitly list what's true
  enumerable: true,
  configurable: true
});

console.log(user.name); // Pete

//...There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once. ie

var owner = {}
Object.defineProperties(owner, {
  name:{value: 'simon', writable: true, enumerable: false, configurable: false }, //...by default, the flags are false
  age: {value: 20}
})
owner.name = 'wax'
owner.age = 21

console.log(owner.name)
console.log(owner.age)

var x = Object.getOwnPropertyDescriptors(owner) //...getting all property descriptors at once
console.log(x)

//...CLONING an object

var clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(owner))
console.log(clone)
console.log(clone.name)

//...Normally when we clone an object, we use an assignment to copy properties, like this:

for (let key in user) {
  clone[key] = user[key]
}
//...But that does not copy flags. So if we want a “better” clone then Object.defineProperties is preferred.

//...Another difference is that for..in ignores symbolic properties, but 
//...bject.getOwnPropertyDescriptors returns all property descriptors including symbolic ones.

//...NOTE: Also Object.assign() can as well be used for cloning and merging objects
let objectAssign = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
var assign = Object.assign(objectAssign, permissions1, permissions2);
console.log(assign)// now user = { name: "John", canView: true, canEdit: true }
//...If the receiving object (user) already has the same named property, it will be overwritten:

let user2 = {
  name: "John",
  age: 30
};

let clone2 = Object.assign({}, user2);
console.log(clone2)

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj){
  for( let key in obj){
    if (typeof obj[key] == 'number'){
      obj[key]*=2
    }
  }
}
console.log(multiplyNumeric(menu))

console.log(2**2)
console.log(4**(1/2))

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 1, //...NOTE: this moves together with 'Symbol.isConcatSpreadable' property and determines the number of properties of an object to concat with the array
};

console.log(arr.concat(arrayLike) ); //
