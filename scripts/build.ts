import dts from "bun-plugin-dts";
import fs from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "dist");

await fs.rm(dir, { force: true, recursive: true });

await Bun.build({
  outdir: dir,
  entrypoints: ["src/index.ts"],
  plugins: [dts()],
});

await Bun.build({
  outdir: dir,
  entrypoints: ["src/adapters/bun/index.ts"],
  target: "bun",
  plugins: [dts()],
});
