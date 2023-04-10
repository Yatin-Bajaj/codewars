/**
 * @link (https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f)
 */
var obj = {
  person: {
    name: "joe",
    history: {
      hometown: "bratislava",
      bio: {
        funFact: "I like fishing.",
      },
    },
  },
};

// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
  let myArr = string.split(".");
  let object = JSON.parse(JSON.stringify(this));
  console.log(object);
  myArr.forEach((key, index) => {
    if (object && object[key] != "undefined") {
      object = object[key];
    } else {
      return undefined;
    }
  });
  return object;
};

Object.prototype.hashCopy = function (string) {
  let myArr = string.split(".");
  let nestedObject = JSON.parse(JSON.stringify(this));
  console.log(nestedObject);
  return myArr.reduce((object, key) => {
    if (object && object[key]) {
      object = object[key];
      return object;
    } else {
      return undefined;
    }
  }, nestedObject);
};

console.log(obj.hash("person.name")); // 'joe'
console.log(obj.hashCopy("person.history.bio")); // { funFact: 'I like fishing.' }
console.log(obj.hashCopy("person.history.homeStreet")); // undefined
console.log(obj.hash("person.animal.pet.needNoseAntEater")); // undefined
