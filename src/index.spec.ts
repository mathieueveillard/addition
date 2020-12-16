import { add } from ".";

it("", function () {
  expect(add("0", "0")).toEqual("0");
});

it("", function () {
  expect(add("0", "1")).toEqual("1");
});

it("", function () {
  expect(add("6", "5")).toEqual("11");
});

it("", function () {
  expect(add("16", "5")).toEqual("21");
});

it("", function () {
  expect(add("121", "21103")).toEqual("21224");
});
