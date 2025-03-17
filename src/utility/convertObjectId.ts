import { ObjectId } from "mongodb";

/**
 * Recursively converts ObjectId instances to strings within an object or array.
 * @param data - The input data containing potential ObjectId instances.
 * @returns The transformed data with ObjectId instances as strings.
 */
export function convertObjectIds(data: any): any {
  if (Array.isArray(data)) {
    return data.map(convertObjectIds);
  } else if (data !== null && typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value instanceof ObjectId ? value.toString() : convertObjectIds(value),
      ])
    );
  } else {
    return data;
  }
}
