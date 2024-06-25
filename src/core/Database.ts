import type { Adapter } from "@/types";

type UpdateFn<Data> = (prev: Data) => void | Promise<void>;

export class Database<Data> {
  private adapter: Adapter<Data>;
  data: Data;

  constructor(adapter: Adapter<Data>, initialData: Data) {
    this.adapter = adapter;
    this.data = initialData;
  }

  async read(): Promise<void> {
    this.data = await this.adapter.read();
  }

  async write(): Promise<void> {
    await this.adapter.write(this.data);
    await this.read();
  }

  async update(updateFn: UpdateFn<Data>): Promise<void> {
    await updateFn(this.data);
    await this.write();
  }
}
