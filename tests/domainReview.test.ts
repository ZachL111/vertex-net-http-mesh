import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 75, slack: 24, drag: 11, confidence: 64 };
assert.equal(domainReviewScore(item), 205);
assert.equal(domainReviewLane(item), "ship");
