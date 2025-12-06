import { BaseContent, ContentType, IdLike } from "./models";

export abstract class DetailedContent implements BaseContent {
  private _type: ContentType;

  constructor(
    readonly id: number,
    readonly title: string,
    readonly releaseDate: Date,
    type: ContentType
  ) {
    this._type = type;
  }

  get type() {
    return this._type;
  }

  set type(_value: ContentType) {
    throw new Error("Content type is immutable!");
  }

  abstract getDetails(): string;
}

export class Movie extends DetailedContent {
  constructor(
    id: number,
    title: string,
    releaseDate: Date,
    readonly director: string
  ) {
    super(id, title, releaseDate, ContentType.Movie);
  }

  getDetails() {
    return `[${Movie.name.toUpperCase()}] "${this.title}" directed by ${
      this.director
    } (Released: ${formatDate(this.releaseDate)})`;
  }
}

export class Series extends DetailedContent {
  constructor(
    id: number,
    title: string,
    releaseDate: Date,
    readonly platformUrl: string
  ) {
    super(id, title, releaseDate, ContentType.Series);
  }

  getDetails() {
    return `[${Series.name.toUpperCase()}] "${
      this.title
    }" (Released: ${formatDate(this.releaseDate)}), available at: ${
      this.platformUrl
    }`;
  }
}

export const findItemById = <T extends IdLike>(items: T[], id: number) => {
  return items.find((i) => i.id === id);
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
