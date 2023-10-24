// comma is missing in object . I have added that
const inputData = {
  a: 123,
  b: "abc",
  c: [1, 2, 3],
  d: {
    e: [4, 5, 6],
  },
};

function transformObject(inputData) {
  const transformedObject = {};
  for (let el in inputData) {
    if (typeof inputData[el] === "number") {
      transformedObject[el] = inputData[el] + 1;
    } else if (typeof inputData[el] === "string") {
      transformedObject[el] = inputData[el] + " AE";
    } else if (Array.isArray(inputData[el])) {
      transformedObject[el] = inputData[el].map((val) => val + 1);
    } else if (typeof inputData[el] === "object") {
      transformedObject[el] = transformObject(inputData[el]);
    }
  }
  return transformedObject;
}

const result = transformObject(inputData);
console.log("Result :=", result);
