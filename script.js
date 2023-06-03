


/*

const user = {
    name: "Dima",
    surname: "Something",
    birthInfo: "dd/mm/yyyy",
    userFunction: function(){
        console.log("Do something");
    }
}

*/

/*

Object.getOwnPropertyDescriptor(user, "userFunction");
console.log(Object.getOwnPropertyDescriptor(user, "userFunction"));
Object.defineProperty(user, "userFunction", {enumerable: false});

for (let key in user){
    console.log(user[key]);
}

*/


 /*

  const arr = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c",];

  for (let key in arr){
    console.log(arr[key]);
  }

  */

 /*

  const str = 'string';

  for ( let key in str){
    //console.log(key);
    console.log(str[key]);
  }

  */

 // const arr = ["a", "b", "c"];

/*

  for (let key of arr){
    console.log(key);
  }

  
  arr.forEach((element) => {
    console.log(element);
  })

*/

/* Error: user is int iterable

const user = {
    name: "Dima",
    surname: "Something",
    birthInfo: "dd/mm/yyyy",
    userFunction: function(){
        console.log("Do something");
    }
}

for (let key of user){
    console.log(key);
}

*/

/* symbol.iterator = true;

const arr = ["a", "b", "c"];
console.dir(arr);

*/

//const arr = ["a", "b", "c"];
//Array.prototype.someMethod = function(){};

/*

for (let key in arr){
    console.log(key);
  }

  */

  // Using "for of" we dont get inherit properties

  /*

  for (let key of arr){
    console.log(key);
  }

*/

const salaries = {
    John: 500,
    Anna: 1500,
    Alice: 12000,
    sayHello: function() {
        console.log("Hello");
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.John,
        last: this.Alice,

        next(){
            if (this.current < this.last){
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                   return  {done: true}
            }
           
        }
    }
}

/*

for (let res of salaries){
    console.log(res);
}

*/

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());

