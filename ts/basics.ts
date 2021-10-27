// Primitive types
let age: number;
age = 20;

let userName: string;
userName = 'Test';

let isTest: boolean;
isTest = true;

let hobbies: string[];
hobbies = ['hobby1', 'hobby2'];

// Reference types
// Declare type alias
type Person = {
    name: string,
    age: number
};

let person: Person;

person = {
    name: 'Test',
    age: 20
};

let people: Person[];

people = [{
    name: 'Test',
    age: 20
}, {
    name: 'Test 2',
    age: 24
}, {
    name: 'Test 3',
    age: 30
}];

let course: string | number = 'React course';
course = 6546235465;

// Functions & types
const add = (a: number, b: number) => {
    return a + b;
};

// Generics
const insertAtBeginning = <T>(array: T[], value: T) => {
    const newArray = [value, ...array];
    return newArray;
};

const data = [1, 2, 3];
const newArray = insertAtBeginning(data, -1);