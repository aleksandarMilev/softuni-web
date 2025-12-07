import { ApplyCommission } from "./decorators";
import { Id, PropertyBase, PropertyType } from "./models";

export abstract class BasePropertyItem implements PropertyBase {
  constructor(
    readonly id: number,
    readonly address: string,
    readonly areaSqM: number,
    readonly type: PropertyType,
    protected readonly salePrice: number
  ) {}

  get baseSalePrice() {
    return this.salePrice;
  }

  get finalSalePrice(): number | undefined {
    return undefined;
  }

  abstract getAnnualTax(): number;
}

export class Apartment extends BasePropertyItem {
  constructor(
    id: number,
    address: string,
    areaSqM: number,
    readonly floor: number,
    salePrice: number
  ) {
    super(id, address, areaSqM, PropertyType.Apartment, salePrice);
  }

  getAnnualTax() {
    return this.areaSqM * 2.5 + this.floor * 5;
  }
}

export class House extends BasePropertyItem {
  constructor(
    id: number,
    address: string,
    areaSqM: number,
    readonly gardenAreaSqM: number,
    salePrice: number
  ) {
    super(id, address, areaSqM, PropertyType.House, salePrice);
  }

  getAnnualTax() {
    return this.areaSqM * 3.0 + this.gardenAreaSqM * 1.5;
  }

  @ApplyCommission
  override get finalSalePrice() {
    return this.salePrice;
  }
}

export const findItemById = <T extends Id>(items: T[], id: number) =>
  items.find((i) => i.id === id);
