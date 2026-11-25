import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A one-line roast of a gadget I use every day, written to /output/entry.txt.
const ENTRY =
  "My sleep app wakes me at the scientifically perfect moment just to tell me I slept terribly.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
