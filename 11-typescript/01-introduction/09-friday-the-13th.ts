enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

type FridayThe13th = (dates: unknown[]) => string[];

const format = (date: Date) => {
  return `${date.getDay()}-${Month[date.getMonth()]}-${date.getFullYear()}`;
};

export const fridayThe13th: FridayThe13th = (dates) => {
  const result: string[] = [];
  for (const date of dates) {
    if (date instanceof Date && date.getDay() === 5 && date.getDate() === 13) {
      result.push(format(date));
    }
  }

  return result;
};
