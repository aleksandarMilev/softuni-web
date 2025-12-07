import { Client, PropertyType } from "./models";
import {
  Apartment,
  BasePropertyItem,
  findItemById,
  House,
} from "./property-types";

export class PropertyManager {
  private readonly propertyItems: BasePropertyItem[] = [];
  private readonly clients: Map<number, Client[]> = new Map();

  addProperty(item: BasePropertyItem) {
    this.propertyItems.push(item);
    this.clients.set(item.id, []);

    return `Property "${item.address}" (ID: ${item.id}) has been added.`;
  }

  registerClient(propertyId: number, client: Client) {
    const existingClients = this.clients.get(propertyId);
    if (existingClients) {
      existingClients.push(client);
      return `Client ${client.name} registered for property ID ${propertyId} successfully.`;
    }

    return `ERROR: Property with ID ${propertyId} not found.`;
  }

  listAllProperties(): string[] {
    const out: string[] = [];
    out.push("--- List of All Properties ---");

    for (const propertyItem of this.propertyItems) {
      const tax = propertyItem.getAnnualTax().toFixed(2);
      const prefix = PropertyType[propertyItem.type].toUpperCase();
      const description =
        propertyItem instanceof Apartment
          ? `(${propertyItem.areaSqM} sqm, Floor ${propertyItem.floor})`
          : `(${propertyItem.areaSqM} sqm, Garden ${
              (propertyItem as House).gardenAreaSqM
            } sqm)`;

      out.push(
        `[${prefix}] ${propertyItem.address} ${description} - Annual Tax: ${tax}`
      );
    }

    return out;
  }

  findProperty(propertyId: number) {
    return findItemById(this.propertyItems, propertyId);
  }
}
