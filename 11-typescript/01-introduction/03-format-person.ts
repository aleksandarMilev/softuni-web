const ageMinValue = 1;
const ageMaxValue = 110;

type Person = [name: string, age: number];

type FormatPerson = (person: Person) => string;

const isValidName = (name: string): boolean => {
  return name.length > 0;
};

const isValidAge = (age: number): boolean => {
  return age >= ageMinValue && age <= ageMaxValue;
};

export const formatPerson: FormatPerson = (person) => {
  const [name, age] = person;
  if (!isValidName(name)) {
    throw new Error("Name cannot be empty string.");
  }

  if (!isValidAge(age)) {
    throw new Error(`Age should be between ${ageMinValue} and ${ageMaxValue}.`);
  }

  return `Hello, my name is ${person[0]} and my age is ${person[1]}`;
};
