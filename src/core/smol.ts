import type { Adapter } from "@/types";
import { Database } from "./Database";

export async function smol<Data>({
  adapter,
  initialData,
}: {
  // TODO: Autocompletion for inline adapter
  // Using any to not infer Data from adapter
  // I'm bad at TypeScript so I don't know how
  adapter: Adapter<any>;
  initialData: Data;
}): Promise<Database<Data>> {
  const db = new Database(adapter, initialData);
  await db.read();
  return db;
}
