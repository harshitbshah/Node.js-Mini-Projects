var square = (x) => x * x;
console.log(square(9));

var user = {
    name : 'Harshit',
    sayHi: () => {
        console.log('Hi');
    },
    sayHiAlt () {
        console.log(`Hi. This is ${this.name}`);
    }
};

user.sayHiAlt();