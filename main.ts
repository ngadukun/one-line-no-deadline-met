// One Line, No Deadline Met — a single-line joke excusing a missed deadline,
// capped at 200 characters, punch at the end.
// Chosen line: a believable, cornered-person excuse — the calendar itself is
// blamed — with the surprise ("the day after it passed") landing last.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I missed the deadline because my calendar only reminded me the day after it passed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
