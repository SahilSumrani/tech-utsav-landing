import { COMMUNITY_MEMBER_COUNT } from "./homepage-content";

if (COMMUNITY_MEMBER_COUNT !== 1000) {
  throw new Error(`Expected the configured community count to be 1000, got ${COMMUNITY_MEMBER_COUNT}.`);
}

console.log("Homepage content checks passed.");