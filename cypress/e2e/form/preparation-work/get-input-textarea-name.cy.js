import { format } from 'date-fns'

const urlFormat = (url) => url.replace(/:|\/|#/g, '_');

const getFormatNow = () =>  format(new Date(), 'yyyyMMddHHmmss');

const getElementList = (selector) => {
  let list = [];
  cy.get(selector).each(($el, index, $list) => {
    cy.log($el.prop)
    list.push({
      [$el.prop('tagName').toLowerCase()]: $el.attr('name')
    })
  })
  return list;
}

const getHdList = () => {
  let list = [];
  cy.get('.form_content_headline').each(($el, index, $list) => {
    list.push($el.text())
  })
  return list;
}

const makeOutputList = (outputList, elementList, hdList) => {
  cy.get('@elementList').then($el => {
    outputList = elementList.reduce((acc, cur, i) => {
      return {
        ...acc,
        [Object.values(cur)]: hdList[i]
      }
    }, {})
    cy.wrap(outputList).as('outputList')
  });
}

const saveOutputFile = () => {
  cy.get('@outputList').then(list => {
    cy.writeFile(`save-files/${__dirname.replace('\\', '/').replace('cypress/e2e', '')}/${urlFormat(Cypress.env('url'))}_${getFormatNow()}.json`, list)
  });
}

describe("Get Input and Textarea Name And Form Heading", () => {
  it("inputとtextareaのname属性の値とフォーム見出しを取得", () => {
    cy.visit(Cypress.env('url'));

    const elementList = getElementList('.form_content_item :is(input, textarea):not([type="hidden"])');
    cy.wrap(elementList).as('elementList')

    const hdList = getHdList();
    cy.wrap(hdList).as('hdList')
    
    let outputList
    makeOutputList(outputList, elementList, hdList)

    saveOutputFile()

    cy.wait(5000)
    cy.screenshot()

  });
});