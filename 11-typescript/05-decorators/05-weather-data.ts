const cacheWeatherData = (ttlMs: number) => {
  let cachedData: string[] | null = null;
  let lastFetched: number | null = null;

  return function (
    _target: Object,
    _methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const now = Date.now();

      if (cachedData && lastFetched && now - lastFetched < ttlMs) {
        console.log("Returned from cache");
        return cachedData;
      }

      const result: string[] = original.apply(this, args);

      cachedData = [...result];
      lastFetched = now;

      return result;
    };

    return descriptor;
  };
};

export class MockWeatherDataService {
  private weatherData: string[] = [
    "Sunny 8° to 20°",
    "Partially Cloudy 7° to 19°",
    "Sunny 5° to 18°",
  ];

  addWeatherData(data: string) {
    this.weatherData.push(data);
  }

  @cacheWeatherData(5_000)
  getWeatherData() {
    return this.weatherData;
  }
}
