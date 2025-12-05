interface CountableSet<T> {
  add(item: T): void;
  remove(item: T): void;
  contains(item: T): boolean;
  getNumberOfCopies(item: T): number;
}

export class CountedSet<T> implements CountableSet<T> {
  private readonly items: Map<T, number> = new Map<T, number>();

  add(item: T) {
    const count = this.items.get(item) ?? 0;
    this.items.set(item, count + 1);
  }

  remove(item: T) {
    const count = this.items.get(item);
    if (!count || count === 0) {
      return;
    }

    this.items.set(item, count - 1);
  }

  contains(item: T) {
    const count = this.items.get(item);
    if (!count || count === 0) {
      return false;
    }

    return true;
  }

  getNumberOfCopies(item: T) {
    return this.items.get(item) ?? 0;
  }
}
