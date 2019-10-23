describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Welcome to Svelte/Sapper Demo')
	});

	it('navigates to forms page', () => {
		cy.get('nav a').contains('Forms').click();
		cy.url().should('include', 'forms');
	});
});