export interface Adapter<Data> {
  read: () => Promise<Data>;
  write: (data: Data) => Promise<void>;
}
