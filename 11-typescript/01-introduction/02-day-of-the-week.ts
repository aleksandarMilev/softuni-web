type PrintDayOfWeek = (dayNumber: number) => void;

enum Day {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

export const printDayOfWeek: PrintDayOfWeek = (dayNumber) => {
  console.log(Day[dayNumber]);
};
