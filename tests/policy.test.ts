import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 62,
    "capacity": 91,
    "latency": 26,
    "risk": 15,
    "weight": 13,
    "score": 99,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 62,
    "capacity": 75,
    "latency": 19,
    "risk": 20,
    "weight": 13,
    "score": 74,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 106,
    "capacity": 83,
    "latency": 16,
    "risk": 17,
    "weight": 11,
    "score": 189,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
