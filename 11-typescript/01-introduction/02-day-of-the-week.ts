type PrintDayOfWeek = (dayNumber: number) => string;

const dayMinValue = 1;

enum Day {
  Monday = dayMinValue,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const dayMaxValue = Object.keys(Day).filter((k) => isNaN(Number(k))).length;

export const printDayOfWeek: PrintDayOfWeek = (dayNumber) => {
  const paramIsOutOfRange = dayNumber < dayMinValue || dayNumber > dayMaxValue;

  if (paramIsOutOfRange) {
    throw new Error(
      `The dayNumber argument should be between ${dayMinValue} and ${dayMaxValue}.`
    );
  }

  return Day[dayNumber]!;
};
