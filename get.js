// getters call a hidden function to retrieve a value
var myObj = {
    //define a getter for 'otherName'
     get otherName(){
        return 'lubega';
    }
}

Object.defineProperty(myObj,//target
     'fullName',//property name
     {//accessor descriptor: An accessor descriptor is a property described by a getter-setter pair of functions.

    //define a getter for 'fullName'
    get: function surName(){
        return this.otherName + 'simon'
    },

    // make sure `fullName` shows up as an object property
    enumerable: true
    // "Enumerable" means to be able to count off the members of a set/collection one by one (usually in order, usually by name).
});

// console.log(myObj.otherName);
console.log('My github username is,',myObj.fullName);