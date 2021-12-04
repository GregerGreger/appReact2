///<reference types = "Cypress"/>

describe("This one walk", () => {
  it("Test one Яндекс", () => {
    cy.visit("https://yandex.ru");
    cy.title().should("contain", "Яндекс");
  });
  it("Test two Гугл", () => {
    cy.visit("https://google.com");
    cy.title().should("contain", "Гугл");
    cy.title().should("contain", "Google");
  });
});
