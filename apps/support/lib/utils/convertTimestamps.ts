import { Timestamp } from "firebase/firestore";
import { ConvertTimestamps } from "@/types/utility";


// 🔁 Runtime function to apply that conversion
export function convertTimestamps<T>(documentObject: T): ConvertTimestamps<T> {
  function convert(obj: any): any {
    if (obj instanceof Timestamp) {
      return obj.toMillis();
    }

    if (Array.isArray(obj)) {
      return obj.map(convert);
    }

    if (obj !== null && typeof obj === 'object') {
      const result: any = {};
      for (const key in obj) {
        result[key] = convert(obj[key]);
      }
      return result;
    }

    return obj;
  }

  return convert(documentObject);
}
