/* Use object spread to make a shallow copy of the following object.* Again, use array and object spread (as required) to create a deep copy of the object. * Test out if making a change to name and front camera details on the iPhone11 object affects the shallow copy. * What about the deep copy? Is it affected?*/
const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    }
} 

const copy1 = {
    ...iPhone11
}

const copy2 = {
    ...iPhone11,
    specs: {
        ...iPhone11.specs,
        memory: {
            ...iPhone11.specs.memory
        },
        cameras: {
            ...iPhone11.specs.cameras
        },
        availableColors: [
            ...iPhone11.specs.availableColors
        ]
    }
}

console.log('Copy1');
console.log(copy1);
console.log('-------------------------------------');
console.log('Copy2');
console.log(copy2);
console.log('-------------------------------------');
console.log('Name Change');
copy1.name = 'Motorola';
console.log('Original: ',iPhone11.name);
console.log('Copy 1: ',copy1.name);
console.log('Copy 2: ',copy2.name);
console.log('-------------------------------------');
console.log('Color Changed')
copy1.specs.color = 'Teal';
console.log('Original: ',iPhone11.specs.color);
console.log('Copy 1: ',copy1.specs.color);
console.log('Copy 2: ',copy2.specs.color);
console.log('-------------------------------------');
console.log('Color Added')
copy2.specs.availableColors.push('Navy Blue');
console.log('Original: ',iPhone11.specs.availableColors);
console.log('Copy 1: ',copy1.specs.availableColors);
console.log('Copy 2: ',copy2.specs.availableColors);
console.log('-------------------------------------');
console.log('Color Removed')
copy1.specs.availableColors.pop();
console.log('Original: ',iPhone11.specs.availableColors);
console.log('Copy 1: ',copy1.specs.availableColors);
console.log('Copy 2: ',copy2.specs.availableColors);
console.log('-------------------------------------');
console.log('Camera')
copy2.specs.cameras = {
            front: '24 MP Wide',
            rear: '48 MP Ultra Wide'
        };
console.log('Original: ',iPhone11.specs.cameras);
console.log('Copy 1: ',copy1.specs.cameras);
console.log('Copy 2: ',copy2.specs.cameras);

/* Original object gets affected when an Array/Object Type is modified in Shallow Copy[copy1] but Deep copy[copy2] is not affected when the original object is modified and vice-versa */