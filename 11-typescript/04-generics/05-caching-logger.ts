enum LoggingLevel {
  Info = "Info",
  Error = "Error",
  Warning = "Warning",
  Debug = "Debug",
}

enum LoggingFormat {
  Standard = "[%level][%date] %text",
  Minimal = "*%level* %text",
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
  cachedLogs: Map<T, string[]>;
  log(logLevel: T, message: string): void;
  getFormat(): V;
}

export class Logger<TLevel extends LoggingLevel, TFormat extends LoggingFormat>
  implements CachingLogger<TLevel, TFormat>
{
  cachedLogs: Map<TLevel, string[]> = new Map();

  constructor(private readonly format: TFormat) {}

  log(logLevel: TLevel, message: string): void {
    const date = new Date().toISOString();

    const output = this.format
      .replace("%level", logLevel)
      .replace("%date", date)
      .replace("%text", message);

    console.log(output);

    const existing = this.cachedLogs.get(logLevel) ?? [];
    existing.push(output);

    this.cachedLogs.set(logLevel, existing);
  }

  getFormat(): TFormat {
    return this.format;
  }
}
