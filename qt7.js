// When will you use an arrow function? When will you NOT use an arrow function?
// When  fn are present in method, then this context doesn't get the object context but individual context. To overcome the issue use an arrow fn.
//When the this context doesn't changes or is not in use for the same object.
const john = {
    name: 'John',
    age: 32,
    celebrateBirthday() {

        function wishJohn() {
            console.log( `Happy birthday ${this.name}` );
        }

        function incrAge() {
            this.age++;
        }

        wishJohn();
        incrAge();
    }
};

john.celebrateBirthday();
console.log( john );

console.log('-----------------------------------');

const john1 = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        const wishJohn = () => {
            console.log( `Happy birthday ${this.name}` );
        };

        const incrAge = () => {
            this.age++;
        };

        wishJohn();
        incrAge();
    }
};

john1.celebrateBirthday();
console.log( john1 );