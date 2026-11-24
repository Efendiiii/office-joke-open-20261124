// Make the AI Judge Laugh: the Office Joke Open — one-line office joke entry.
// Writes the joke to /output/entry.txt. Gate: 1–200 UTF-8 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "IT fixed my computer by giving me a ticket number, a survey about the ticket, and a meeting to discuss the survey.";

const chars = [...JOKE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`joke must be 1-200 characters, got ${chars}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
