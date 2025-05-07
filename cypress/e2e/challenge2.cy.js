describe('Dealls Mentoring Feature - Mentee Scenarios', () => {
  const MENTEE_EMAIL = 'test_mentee@example.com'; 
  const MENTEE_PASSWORD = 'ValidPassword123';

  // Helper: Perform a mentor search by keyword
  const searchMentorByKeyword = (keyword) => {
    cy.visit('/mentoring/search');
    cy.get('[data-testid="mentor-search-input"]').clear().type(keyword);
    cy.get('[data-testid="mentor-search-button"]').click();
  };

  // Run before each test to log in as a mentee
  beforeEach(() => {
    cy.visit('/sign-in?returnUrl=%2Fmentoring');

    // Fill in login form
    cy.get('#basic_email').type(MENTEE_EMAIL);
    cy.get('#basic_password').type(MENTEE_PASSWORD);
    cy.get('button[type="submit"]').click();

    // Confirm successful login
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="user-welcome-message"]').should('be.visible');
  });

  it('should allow a logged-in mentee to search for a mentor by keyword', () => {
    const searchTerm = 'Software Development';
    searchMentorByKeyword(searchTerm);

    // Verify search results contain relevant mentor cards
    cy.get('[data-testid="mentor-search-results"]').should('be.visible');
    cy.get('[data-testid="mentor-result-card"]').first().should('contain.text', searchTerm);
  });

  it('should allow a logged-in mentee to view a mentor profile from search results', () => {
    const searchTerm = 'Product Management';
    searchMentorByKeyword(searchTerm);

    // Open the profile of the first mentor result
    cy.get('[data-testid="mentor-result-card"]')
      .first()
      .find('[data-testid="view-profile-link"]')
      .click();

    // Check that mentor profile page is displayed
    cy.url().should('match', /\/mentoring\/profile\/\d+/);
    cy.get('[data-testid="mentor-profile-name"]').should('be.visible');
    cy.get('[data-testid="mentor-profile-bio"]').should('be.visible');
  });

  it('should display a message when no mentors match the search keyword', () => {
    const nonExistentKeyword = 'Quantum Goat Herding'; // unlikely to return results
    searchMentorByKeyword(nonExistentKeyword);

    cy.get('[data-testid="mentor-search-results"]').should('be.visible');
    cy.get('[data-testid="no-mentors-found"]')
      .should('be.visible')
      .and('contain.text', 'No mentors found');
  });

  it('should show a validation message when trying to search with an empty keyword', () => {
    cy.visit('/mentoring/search');

    cy.get('[data-testid="mentor-search-input"]').clear();
    cy.get('[data-testid="mentor-search-button"]').click();

    cy.get('[data-testid="search-error-message"]')
      .should('be.visible')
      .and('contain.text', 'Please enter a search keyword');
  });
});
