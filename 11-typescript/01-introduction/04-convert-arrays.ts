type ConvertedArray = [text: string, length: number];

type ConvertArray = (textArray: string[]) => ConvertedArray;

export const convertArray: ConvertArray = (textArray) => {
  const separator = "";
  const text = textArray.join(separator);

  return [text, text.length];
};
