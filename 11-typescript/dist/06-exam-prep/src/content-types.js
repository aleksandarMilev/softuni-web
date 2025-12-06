"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findItemById = exports.Series = exports.Movie = exports.DetailedContent = void 0;
const models_1 = require("./models");
class DetailedContent {
    constructor(id, title, releaseDate, type) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set type(_value) {
        throw new Error("Content type is immutable!");
    }
}
exports.DetailedContent = DetailedContent;
class Movie extends DetailedContent {
    constructor(id, title, releaseDate, director) {
        super(id, title, releaseDate, models_1.ContentType.Movie);
        this.director = director;
    }
    getDetails() {
        return `[${Movie.name.toUpperCase()}] "${this.title}" directed by ${this.director} (Released: ${formatDate(this.releaseDate)})`;
    }
}
exports.Movie = Movie;
class Series extends DetailedContent {
    constructor(id, title, releaseDate, platformUrl) {
        super(id, title, releaseDate, models_1.ContentType.Series);
        this.platformUrl = platformUrl;
    }
    getDetails() {
        return `[${Series.name.toUpperCase()}] "${this.title}" (Released: ${formatDate(this.releaseDate)}), available at: ${this.platformUrl}`;
    }
}
exports.Series = Series;
const findItemById = (items, id) => {
    return items.find((i) => i.id === id);
};
exports.findItemById = findItemById;
const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
