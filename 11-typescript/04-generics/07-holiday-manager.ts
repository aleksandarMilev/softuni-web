enum TravelVacation {
  Abroad = "Abroad",
  InCountry = "InCountry",
}

enum MountainVacation {
  Ski = "Ski",
  Hiking = "Hiking",
}

enum BeachVacation {
  Pool = "Pool",
  Sea = "Sea",
  ScubaDiving = "ScubaDiving",
}

interface Holiday {
  set start(val: Date);
  set end(val: Date);
  getInfo(): string;
}

interface VacationManager<T, V> {
  reserveVacation(holiday: T, vacationType: V): void;
  listReservations(): string;
}

export class PlannedHoliday implements Holiday {
  private static readonly InvalidStartDate =
    "Start date cannot be after end date";

  private static readonly InvalidEndDate =
    "End date cannot be before start date";

  private _start: Date;
  private _end: Date;

  constructor(start: Date, end: Date) {
    if (end < start) {
      throw new Error(PlannedHoliday.InvalidEndDate);
    }

    this._start = start;
    this._end = end;
  }

  set start(val: Date) {
    if (val > this._end) {
      throw new Error(PlannedHoliday.InvalidStartDate);
    }

    this._start = val;
  }

  set end(val: Date) {
    if (val < this._start) {
      throw new Error(PlannedHoliday.InvalidEndDate);
    }

    this._end = val;
  }

  getInfo(): string {
    return `Holiday: ${this.#formatDate(this._start)} - ${this.#formatDate(
      this._end
    )}`;
  }

  #formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}

export class HolidayManager<
  THoliday extends Holiday,
  TVacation extends TravelVacation | MountainVacation | BeachVacation
> implements VacationManager<THoliday, TVacation>
{
  private readonly connections = new Map<THoliday, TVacation>();

  reserveVacation(holiday: THoliday, vacationType: TVacation): void {
    this.connections.set(holiday, vacationType);
  }

  listReservations(): string {
    let output = "";
    for (const [holiday, vacationType] of this.connections) {
      output += `${holiday.getInfo()} => ${vacationType}\n`;
    }

    return output.trim();
  }
}
