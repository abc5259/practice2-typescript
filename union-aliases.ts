const combine = (
  input1: number | string | boolean,
  input2: number | string,
  input3: string
) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const a = combine("Max", "Anna", "dwa");
console.log(a);
