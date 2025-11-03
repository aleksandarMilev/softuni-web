type UnknownResponse = (responseObject: unknown) => string;

export const unknownResponse: UnknownResponse = (responseObject) => {
  const hasValidValueProperty =
    responseObject !== null &&
    typeof responseObject === "object" &&
    "value" in responseObject &&
    typeof responseObject.value === "string";

  if (hasValidValueProperty) {
    return (responseObject as { value: string }).value;
  }

  return "-";
};
