import { test, expect } from "vitest";
import { map } from "../src/map";

test("map", () => {
  expect(map([1, 2, 3], (value) => value.toString())).toEqual(["1", "2", "3"]);
});
