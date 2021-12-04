///<reference types = "Cypress"/>

describe("This one walk", () => {
  it("Test one Яндекс", () => {
    cy.visit("https://yandex.ru");
    cy.title().should("contain", "Яндекс");
  });
  it.skip("Test two Гугл", () => {
    cy.visit("https://google.com");
    cy.title().should("contain", "Гугл");
    cy.title().should("contain", "Google");
    // npx cypress run --record --key b1b6e045-b0ee-4e35-ba6c-d7eb04425587 --browser chrome --tag "OnTest"
  });
});
