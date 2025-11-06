// COPY
const hobbies = ["Hiking", "Gaming"];
const myHobbies = [...hobbies];
const yourHobbies = myHobbies;

myHobbies[1] = "Sleeping";

// console.log(hobbies);
// console.log(myHobbies);
// console.log(yourHobbies);

const person = {
  name: "Andi",
  age: 20,
};
const student = person;
const tutor = { ...person };

tutor.age = 21;
student.name = "Aji";

// console.log(person);
// console.log(student);
// console.log(tutor);

// MERGE
const anotherHobbies = ["Flexing", "Fishing", "Gaming"];
const totalHobbies = [...anotherHobbies, ...hobbies];

console.log(hobbies);
console.log(anotherHobbies);
console.log(totalHobbies);

const anotherPerson = {
  name: "Budi",
  city: "Bandung",
};
const totalPerson = { ...anotherPerson, ...person };

console.log(person);
console.log(anotherPerson);
console.log(totalPerson);

const editPerson = {
  ...person,
  age: 35,
};

console.log(editPerson);
