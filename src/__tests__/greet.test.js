const { greet } = require("greet");

test("greet returns expected message", () => {
  expect(greet("Team")).toBe("Hello, Team! Welcome to Agile DevOps.");
});
