describe("Login", () => {
  it("Tests login via firebase", () => {
    cy.login("tzslT5pAGsPXWrCAVH08DrF4L6x1")
  });
});
describe("Logout", () => {
  it("Tests logout via firebase", () => {
    cy.login("tzslT5pAGsPXWrCAVH08DrF4L6x1")
    cy.logout("tzslT5pAGsPXWrCAVH08DrF4L6x1")
  });
});
describe("More complex auth test", () => {
  const TEST_UID = "tzslT5pAGsPXWrCAVH08DrF4L6x1";
  const mockAge = 8;

  beforeEach(() => {
    cy.visit("/");
  });

  it("read/write test", () => {
    cy.log("Starting test");

    cy.callFirestore("set", `testCollection/${TEST_UID}`, {
      name: "axa",
      age: 8,
    });
    cy.callFirestore("get", `testCollection/${TEST_UID}`).then((r) => {
      cy.log("get returned: ", r);
      cy.wrap(r).its("age").should("equal", mockAge);
    });
    cy.log("Ended test");
  });
});