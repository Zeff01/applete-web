import { Timestamp } from "firebase/firestore";

// More precise type guard to convert Timestamps deeply and safely
export type ConvertTimestamps<T> = 
  T extends Timestamp ? number :
  T extends Date ? Date : // optional: preserve Date objects
  T extends (infer U)[] ? ConvertTimestamps<U>[] :
  T extends object 
    ? T extends Function 
      ? T
      : { [K in keyof T]: ConvertTimestamps<T[K]> } 
    : T;