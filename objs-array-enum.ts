enum job {
  AUTHOR,
  STUDENT,
}
console.log(job.AUTHOR);

const person: {
  name: string;
  age: number;
  hobbies: string[]; //array
  role: [number, string, number]; //tuple
} = {
  name: "leejaehoon",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "hi", 3],
};

let ary: string[];
ary = ["ad", "dd"];

console.log(person.name);
