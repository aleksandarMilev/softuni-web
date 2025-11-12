type HttpResponse = { code: number; text: string; printChars?: number };

type PrintHttpInfo = (response: HttpResponse) => string;

export const printHttpInfo: PrintHttpInfo = (response) => {
  if (response.printChars) {
    return response.text.substring(0, response.printChars);
  }

  return response.text;
};
