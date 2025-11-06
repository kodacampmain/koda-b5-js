// object
const person = {
  firstName: "Andi",
  age: 20,
};

const personName = person.firstName;
const personAge = person.age;
// console.log(personName, personAge);

const { firstName: namaDepan, age } = person;
// const firstName = person.firstName
// const age = person.age
// console.log(namaDepan, age);

// array
const rgb = [255, 140, 0, 1, 2, 3];

const merah = rgb[0];
const hijau = rgb[1];
const biru = rgb[2];
// console.log(merah, hijau, biru);

const [, , blue] = rgb;
// console.log(blue);
const [, green, ...rest] = rgb;
// console.log(green, rest);

const level1 = {
  id: "root",
  name: "Main Structure",
  metadata: {
    created: "2024-01-15",
    version: "1.0.0",
    tags: ["nested", "example", "complex"],
    history: [
      ["2024-01-01", "initial draft", ["john", "reviewers"]],
      ["2024-01-10", "first revision", ["alice", "bob", "qa-team"]],
      ["2024-01-15", "final version", ["all-members", "stakeholders"]],
    ],
  },
};
const {
  metadata: {
    created,
    // history: [[, , [bangjon]]],
    history,
    tags: [, contoh],
  },
  //   name: codename,
  ...sisa
} = level1;
const [first] = history;
const [, , subject] = first;
const [bangjon] = subject;
// console.log(bangjon);
// console.log(created, codename, history);

const values = [
  [1, 2],
  [3, 4],
];

const [, kriuk] = values;
const [, enak] = kriuk;
console.log(enak);
