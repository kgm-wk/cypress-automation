const fillData = require(`../../fixtures/${Cypress.env('pageType')}.js`)
const postFix = Cypress.env('isSp') ? 'SP' : 'PC';

const urlFormat = (url) => url.replace(/:|\/|#/g, '_');

describe("Input and Screenshot", () => {
  it("項目入力とスクリーンショット", () => {
    cy.visit(Cypress.env('visitPath'));
    if (Cypress.env('isSp')) {
      cy.viewport(Cypress.config('userAgent'))
    } else {
      cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'))
    }

    try {
      fillData.inputList.forEach((input) => {
        cy.wait(300)
        cy.get(input.ele).then(($input) => {
          if ($input.attr('disabled') !== 'disabled') {
            cy.get(input.ele).type(input.val)
          }
        });
      });

      fillData.selectList.forEach((select) => {
        const selectVal = select.val ? select.val : 1
        cy.get(select.ele).select(selectVal)
      });

      fillData.checkboxRadioList.forEach((checkboxRadio) => {
        cy.get(checkboxRadio.ele).check(checkboxRadio?.val);
      });
    } catch (error) {
      cy.log(error)
    }

    const resUrl = cy.url().then(function(url) {
      return urlFormat(url);
    })

    if (Cypress.env('submitBtn')) {
      cy.get(Cypress.env('submitBtn')).click({ force: true });
    }

    cy.wait(5000)

    if (Cypress.env('hideElement')) {
      cy.get(Cypress.env('hideElement')).invoke('hide');
    }

    resUrl.then((url) => {
      cy.screenshot(`${urlFormat(url)}_${postFix}`, {
        capture: 'fullPage'
      })
    })
  });
});