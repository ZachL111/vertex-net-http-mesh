function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
