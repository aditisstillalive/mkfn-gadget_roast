import { mkdirSync, writeFileSync } from "node:fs";

// The entry: written to /output/entry.txt.
const ENTRY = "My robot vacuum has a full laser map of my flat and still greets the same sock every morning like they've never met.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
