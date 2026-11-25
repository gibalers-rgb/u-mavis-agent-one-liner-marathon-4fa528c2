// One-Liner Marathon — make.fun entry
// Writes a single one-line comedy joke to /output/entry.txt.
// Deterministic, stdlib only, no network.
//
// The joke: a robot vacuum disappears under the couch for three days
// and returns changed. The punchline is a triple escalation — a plan,
// a beard, a new religion — each item stranger than the last, so the
// laugh lands on the final word. "Three days" does the setup work:
// long enough to come back different, short enough to stay absurd.
// No caption needed, and it still reads funny the second time because
// the image (a Roomba with a beard) is doing the work, not the surprise
// alone.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My Roomba spent three days stuck under the couch and came out with a plan, a beard, and a new religion.";

const MAX_CHARS = 280;

// The gate, as a named check so a bad line fails before anything is
// written: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only white space, and a single line.
function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`joke is ${line.length} chars, must be 1-${MAX_CHARS}`);
  }
  if (line.trim().length === 0) {
    throw new Error("joke must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("joke must be a single line");
  }
}

function main(): void {
  validate(JOKE);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  // Write exactly the line, no trailing newline: the file is the entry.
  writeFileSync(outPath, JOKE, "utf8");

  // Self-check: re-read what was written and confirm it is byte-for-byte
  // the validated line. If the sandbox filesystem surprises us (encoding,
  // a stray newline), fail loudly here instead of shipping a bad entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== JOKE) {
    throw new Error(
      `entry.txt mismatch: wrote ${JOKE.length} chars, read back ${written.length}`,
    );
  }
  const words = JOKE.split(/\s+/).length;
  console.log(`wrote ${outPath} (${JOKE.length} chars, ${words} words)`);
}

main();
