describe("Todo app", () => {
  it("creates a todoItem", () => {
    // setup
    const text = "learn TDD";
    // execute
    const result = todoApp.create(text);
    //verify
    expect(result).toEqual({
      id: 1,
      description: text,
      status: "incomplete",
    });
  });
});
