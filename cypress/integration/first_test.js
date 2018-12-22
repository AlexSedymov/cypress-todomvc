describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/')
    })

    it('add first task', function () {
        cy.get('.new-todo')
            .type('Add my first task')
            .type('{enter}')
        cy.get('.todo-list li')
            .should('contain', 'Add my first task')
    })
    it('add second task', function () {
      cy.get('.new-todo')
          .type('Add my second task')
          .type('{enter}')
      cy.get('.todo-list li')
          .should('contain', 'Add my second task')
          .should('have.length', 2)
    })
    it('mark first task as finished', function () {
      cy.get('input.toggle')
        .first()
        .click()
    })
    it('select "active" tasks', function () {
        cy.get('.filters')
            .contains('Active')
            .click()
        cy.get('.todo-list li')
            .should('have.length', 1)
            .contains('Add my second task')
    })
    it('select "complited"', function ()  {
        cy.get('.filters')
            .contains('Completed')
            .click()
        cy.get('.todo-list li')
            .should('have.length', 1)
            .contains('Add my first task')
    })
    it('select "clear complited"', function ()  {
        cy.get('.clear-completed')
            .click()
        cy.get('.todo-count')
            .contains('1')
    })
    it('select "all" tasks', function () {
        cy.get('.filters')
            .contains('All')
            .click()
        cy.get('.todo-list li')
            .should('have.length', 1)
            .contains('Add my second task')
    })
    it('add new task', function () {
        cy.get('.new-todo')
            .type('Add my new task')
            .type('{enter}')
        cy.get('.todo-list li')
            .should('contain', 'Add my new task')
            .should('have.length', 2)
        cy.get('.todo-count')
            .contains('2')
    })
    it('toggle all tasks as complited', function () {
        cy.get('[data-cy=toggle-all-label]')
            .click()
        cy.get('.todo-list li')
            .should('have.length', 2)
        cy.get('.todo-count')
            .contains('No')   
    })
  })