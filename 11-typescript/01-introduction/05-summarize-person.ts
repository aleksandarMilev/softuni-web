type PersonSummary = [
  id: number,
  fullName: string,
  age: number,
  hobbies: string,
  workInfo: string
];

type WorkInfo = [position: string, salary: number];

type SummarizePerson = (
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: WorkInfo
) => PersonSummary;

const isValidName = (name: string) => {
  return name.length > 0;
};

const minAgeValue = 1;
const maxAgeValue = 110;

const isValidAge = (age: number) => {
  return age >= minAgeValue && age <= maxAgeValue;
};

const invalidArgErrorMessage = (argName: string) => {
  return `Invalid ${argName}.`;
};

const validateInput = (age: number, firstName: string, lastName: string) => {
  if (!isValidAge(age)) {
    throw new Error(invalidArgErrorMessage("age"));
  }

  if (!isValidName(firstName)) {
    throw new Error(invalidArgErrorMessage("firstName"));
  }

  if (!isValidName(lastName)) {
    throw new Error(invalidArgErrorMessage("lastName"));
  }
};

const getFullName = (
  middleName: string | undefined,
  firstName: string,
  lastName: string
) => {
  const isValidMiddleName = middleName && isValidName(middleName);
  if (isValidMiddleName) {
    return `${firstName} ${middleName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
};

const getHobbies = (hobbies: string[] | undefined) => {
  const hasHobbies = hobbies && hobbies.length > 0;
  if (hasHobbies) {
    return hobbies.join(", ");
  } else {
    return "-";
  }
};

const getWorkInfo = (workInfo: WorkInfo | undefined) => {
  if (workInfo) {
    const [position, salary] = workInfo;
    return `${position} -> ${salary}`;
  } else {
    return "-";
  }
};

export const summarizePerson: SummarizePerson = (
  id,
  firstName,
  lastName,
  age,
  middleName?,
  hobbies?,
  workInfo?
) => {
  validateInput(age, firstName, lastName);

  const fullName = getFullName(middleName, firstName, lastName);
  const hobbiesSummary = getHobbies(hobbies);
  const workInfoSummary = getWorkInfo(workInfo);

  return [id, fullName, age, hobbiesSummary, workInfoSummary];
};
