"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockWeatherDataService = void 0;
const cacheWeatherData = (ttlMs) => {
    let cachedData = null;
    let lastFetched = null;
    return function (_target, _methodName, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const now = Date.now();
            if (cachedData && lastFetched && now - lastFetched < ttlMs) {
                console.log("Returned from cache");
                return cachedData;
            }
            const result = original.apply(this, args);
            cachedData = [...result];
            lastFetched = now;
            return result;
        };
        return descriptor;
    };
};
class MockWeatherDataService {
    constructor() {
        this.weatherData = [
            "Sunny 8° to 20°",
            "Partially Cloudy 7° to 19°",
            "Sunny 5° to 18°",
        ];
    }
    addWeatherData(data) {
        this.weatherData.push(data);
    }
    getWeatherData() {
        return this.weatherData;
    }
}
exports.MockWeatherDataService = MockWeatherDataService;
__decorate([
    cacheWeatherData(5000)
], MockWeatherDataService.prototype, "getWeatherData", null);
