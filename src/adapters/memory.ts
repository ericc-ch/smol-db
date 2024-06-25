import type { Adapter } from "@/types";

export function memory<Data>(): Adapter<Data> {
  let db = {} as Data;

  return {
    read: async () => {
      return structuredClone(db);
    },
    write: async (data) => {
      db = structuredClone(data);
    },
  };
}
