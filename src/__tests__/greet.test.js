const { greet } = require("../src/greet");

test("greet returns expected message", () => {
  expect(greet("Team")).toBe("Hello, Team! Welcome to Agile DevOps.");
});
