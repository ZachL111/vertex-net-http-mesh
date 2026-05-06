function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 75, slack: 24, drag: 11, confidence: 64 };
equal(domainReviewScore(item), 205);
equal(domainReviewLane(item), "ship");
