import type { Adapter } from "@/types";
import { Writer } from "ritzen";

export function json<Data>(filePath: string): Adapter<Data> {
  const file = Bun.file(filePath);
  const writer = new Writer(filePath);

  return {
    read: async () => {
      return file.json() as Promise<Data>;
    },
    write: async (data) => {
      const jsonData = JSON.stringify(data, null, 2);
      await writer.write(jsonData);
    },
  };
}
