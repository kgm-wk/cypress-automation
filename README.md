# Cypressで自動入力とスクリーンショット

## 参考サイト
- [invoke | Cypress Documentation](https://docs.cypress.io/api/commands/invoke)
- [each | Cypress Documentation](https://docs.cypress.io/api/commands/each)
- [type | Cypress Documentation](https://docs.cypress.io/api/commands/type)
- [select | Cypress Documentation](https://docs.cypress.io/api/commands/select)
- [check | Cypress Documentation](https://docs.cypress.io/api/commands/check)
```js
/***** checkbox *****/
// すべてをチェック
cy.get('[type="checkbox"]').check();
// value値でチェック
cy.get('[type="checkbox"]').check(['1', '3']);

/***** radioボタン *****/
// value値でチェック
cy.get('[type="radio"]').check('2');
```
- [click | Cypress Documentation](https://docs.cypress.io/api/commands/click)
- [submit | Cypress Documentation](https://docs.cypress.io/api/commands/submit)
- [screenshot | Cypress Documentation](https://docs.cypress.io/api/commands/screenshot)
- [url | Cypress Documentation](https://docs.cypress.io/api/commands/url)
- [javascript - How can I get the url in cypress? - Stack Overflow](https://stackoverflow.com/questions/70382833/how-can-i-get-the-url-in-cypress)
- [Cypress を利用した E2E テスト | ソフトウェア雑記](https://softwarenote.info/p1454/)
- [Cypressの環境構築と自動テスト実行方法について - Qiita](https://qiita.com/tkshiiiir/items/051464226a00937d8d17#fixtures)
- [javascript - Cypress does not always executes click on element - Stack Overflow](https://stackoverflow.com/questions/51254946/cypress-does-not-always-executes-click-on-element)

### エラー無視
- [Cypress visit uncaught reference - Stack Overflow](https://stackoverflow.com/questions/58309612/cypress-visit-uncaught-reference)

### UserAgent
- [Configuration | Cypress Documentation](https://docs.cypress.io/guides/references/configuration)
- [viewport | Cypress Documentation](https://docs.cypress.io/api/commands/viewport)

### 環境変更
- [Multiple config files in Cypress 10? · Discussion #22517 · cypress-io/cypress](https://github.com/cypress-io/cypress/discussions/22517)
- [How My Team Tests with Cypress Across Multiple Environments - DEV Community 👩‍💻👨‍💻](https://dev.to/samelawrence/how-to-test-in-multiple-environments-in-cypress-10-1i9h)
- [Switch between environments in Cypress Filip Hric](https://filiphric.com/switch-between-environments-in-cypress)
- [Cypressで環境変数を指定する方法](https://zenn.dev/mako_makok/articles/cypress-option)
- [Cypress - 設定編 | フューチャー技術ブログ](https://future-architect.github.io/articles/20210428b/#%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88)
- [System Testing Multiple Deployment Environments in Cypress 10 - SEP](https://sep.com/blog/system-testing-multiple-deployment-environments-in-cypress-10/)

### テストデータ
- [Cypressにテストデータを用意する(fixtureの使い方) - Qiita](https://qiita.com/yurihyp/items/00f65e27103ed95b08a5)

### 変数の保持
- [javascript - How to save a variable/text to use later in Cypress test? - Stack Overflow](https://stackoverflow.com/questions/59184571/how-to-save-a-variable-text-to-use-later-in-cypress-test)
- [Cypress: store value in a variable - Stack Overflow](https://stackoverflow.com/questions/69977821/cypress-store-value-in-a-variable)
- [Variables and Aliases | Cypress Documentation](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Return-Values)
- [wrap | Cypress Documentation](https://docs.cypress.io/api/commands/wrap)

### 実行中ファイル名
- [node.js - How to get filename of script being executed in NodeJS? - Stack Overflow](https://stackoverflow.com/questions/13829037/how-to-get-filename-of-script-being-executed-in-nodejs)

### 複数ページ
- [Cypress Snippet: Test multiple URL’s and Multiple sizes in one ‘test’. | by Steven Chapman | Medium](https://medium.com/@stevey.cee/cypress-snippet-test-multiple-urls-and-multiple-sizes-in-one-test-4ab439145200)

### cypress openではvideoはOFF
- [Screenshots and Videos | Cypress Documentation](https://docs.cypress.io/guides/guides/screenshots-and-videos#Videos)

### Cache clear
- [Command Line | Cypress Documentation](https://docs.cypress.io/guides/guides/command-line#cypress-cache-clear)
```
このコマンドを実行した後、Cypress を再度実行する前に cypress install を実行する必要があります。
```

### HTML Attribute
- [How to get HTML attribute value in Cypress - Stack Overflow](https://stackoverflow.com/questions/62559384/how-to-get-html-attribute-value-in-cypress)