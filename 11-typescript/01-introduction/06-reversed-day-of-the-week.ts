type ReversedDayOfWeek = (day: string) => number;

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

export const reversedDayOfWeek: ReversedDayOfWeek = (day) => {
  const dayNumber = Day[day as keyof typeof Day];
  if (!dayNumber) {
    throw new Error("Invalid day.");
  }

  return dayNumber;
};
