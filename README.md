# jquery-hijax-button

<p>
    <a href="https://travis-ci.org/makeup-jquery/jquery-hijax-button"><img src="https://api.travis-ci.org/makeup-jquery/jquery-hijax-button.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-jquery/jquery-hijax-button?branch=master'><img src='https://coveralls.io/repos/makeup-jquery/jquery-hijax-button/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-hijax-button"><img src="https://david-dm.org/makeup-jquery/jquery-hijax-button.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-hijax-button#info=devDependencies"><img src="https://david-dm.org/makeup-jquery/jquery-hijax-button/dev-status.svg" alt="devDependency status" /></a>
</p>

jQuery collection plugin that changes anchor tag semantics and behaviour to button semantics and behaviour.

```js
$(selector).hijaxButton();
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
npm install jquery-hijax-button
```

## Example

Markup before plugin:

```html
<a class="hijax-button" href="http://my.ebay.com">Link</a>
```

Markup after plugin:

```html
<a href="http://my.ebay.com" role="button">Link</a>
```

`SPACEBAR` key now triggers a `click` event.

## Development

Useful NPM task runners:

* `npm start` for local browser-sync development.
* `npm test` runs tests & generates reports (see reports section below)
* `npm run tdd` test driven development: watches code and re-tests after any change
* `npm run build` cleans, lints, tests and minifies

Execute `npm run` to view all available CLI scripts.

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/makeup-jquery/jquery-hijax-button

## Code Coverage

https://coveralls.io/github/makeup-jquery/jquery-hijax-button?branch=master
