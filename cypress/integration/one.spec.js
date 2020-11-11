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