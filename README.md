# One-Liner Marathon

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/gibalers-rgb/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/gibalers-rgb/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

One one-line comedy joke, 103 characters, on any subject — a robot vacuum
that disappears under the couch for three days and comes back changed:

> My Roomba spent three days stuck under the couch and came out with a plan, a beard, and a new religion.

The punchline is a triple escalation — a plan, a beard, a new religion —
each item stranger than the last, so the laugh lands on the final word.

## Run it

```sh
node main.ts
```

Writes the joke to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`).
Deterministic, standard library only, no network. The program validates
the line first — 1 to 280 characters, non-blank, single line — then
re-reads what it wrote to confirm it matches byte for byte.
