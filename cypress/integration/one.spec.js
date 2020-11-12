describe ('Initial Test', () => {
  it ('is working', () => {
    expect (true).to.equal (true);
  });
});
describe ('Load Test', () => {
  it ('Visits the front page of the app', () => {
    cy.visit ('/');
  });
});
describe("Add Data To Firebase", () => {
  it("Adds document to test_hello_world collection of Firestore", () => {
    cy.callFirestore("add", "test", { some: "value" });
  });
});