type Status = "Locked" | "Unlocked" | "Deleted";

type User = {
  id: number | string;
  username: string;
  passwordHash: string | string[];
  status: Status;
  email?: string;
};

export const validate = (user: any): user is User =>
  isValidId(user.id) &&
  isValidUsername(user.username) &&
  isValidPasswordHash(user.passwordHash) &&
  isValidStatus(user.status);

const isString = (str: unknown): str is string => typeof str === "string";

const isValidId = (id: number | string) => {
  const isNumber = typeof id === "number";
  const MIN_VALUE = 100;

  if (isNumber && id > MIN_VALUE) {
    return true;
  }

  const ALLOWED_LENGTH = 14;
  if (isString(id) && id.length === ALLOWED_LENGTH) {
    return true;
  }

  return false;
};

const isValidUsername = (username: string) => {
  const MIN_LENGTH = 5;
  const MAX_LENGTH = 10;

  return username.length >= MIN_LENGTH && username.length <= MAX_LENGTH;
};

const isValidPasswordHash = (passwordHash: string | string[]) => {
  const ALLOWED_STRING_LENGTH = 20;
  if (isString(passwordHash) && passwordHash.length === ALLOWED_STRING_LENGTH) {
    return true;
  }

  const isStringArray =
    Array.isArray(passwordHash) && passwordHash.every(isString);

  const ALLOWED_ARRAY_LENGTH = 4;
  const ALLOWED_ARRAY_ELEMENT_LENGTH = 8;
  if (
    isStringArray &&
    passwordHash.length === ALLOWED_ARRAY_LENGTH &&
    passwordHash.every((h) => h.length === ALLOWED_ARRAY_ELEMENT_LENGTH)
  ) {
    return true;
  }

  return false;
};

const isValidStatus = (status: Status) =>
  status === "Locked" || status === "Unlocked";
