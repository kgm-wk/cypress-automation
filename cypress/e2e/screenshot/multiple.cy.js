const urls = [
  'https://cdn.codegrid.net/2017-testcafe/demo/1.html',
  'https://devexpress.github.io/testcafe/example/',
];

const urlFormat = (url) => url.replace(/:|\/|#/g, '_');

const showCyLog = () => {
  // inputとtextareaのname属性を取得
  // $el is a wrapped jQuery element
  cy.get('input, textarea').each(($el, index, $list) => {
    cy.log($el.attr('name'))
  })
}

describe("Multiple Page Screenshot", () => {
  it("複数ページのスクリーンショット", () => {
    urls.forEach((url) => {
      cy.visit(url);
      cy.wait(3000)
      cy.scrollTo('bottom')
      cy.screenshot()
    })
  });
});