type IsNonEmptyStringArray = (array: unknown) => array is string[];

export const isNonEmptyStringArray: IsNonEmptyStringArray = (
  array
): array is string[] => {
  return (
    array !== null &&
    Array.isArray(array) &&
    array.length > 0 &&
    array.every((a) => typeof a === "string")
  );
};
