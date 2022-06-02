import createTestIdFilePath from "../createTestIdFilePath";

describe.skip("createTestIdFilePath", () => {
  it("Adds all of the args", () => {
    expect(createTestIdFilePath("a", "b", "c")).toBe("a/b/c");
  });
});
