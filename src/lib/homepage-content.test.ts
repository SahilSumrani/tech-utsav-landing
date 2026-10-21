import { COMMUNITY_MEMBER_COUNT } from "./homepage-content";

if (COMMUNITY_MEMBER_COUNT !== "1K+") {
  throw new Error(
    `Expected the configured community count to be 1K+, got ${COMMUNITY_MEMBER_COUNT}.`,
  );
}

console.log("Homepage content checks passed.");
