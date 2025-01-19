# kebab case
![tests](https://github.com/substrate-system/kebab-case/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/kebab-case?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/kebab-case)](https://packagephobia.com/result?p=@nichoth/session-cookie)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-Polyform_Non_commercial-26bc71)](LICENSE)


Kebab case a string.

```js
import { kebabCase } from '@substrate-system/kebab-case'

kebabCase('the quick brown fox');  // 'the-quick-brown-fox'
kebabCase('the-quick-brown-fox');  // 'the-quick-brown-fox'
kebabCase('the_quick_brown_fox');  // 'the-quick-brown-fox'
kebabCase('theQuickBrownFox');  // 'the-quick-brown-fox'
kebabCase('theQuickBrown Fox');  // 'the-quick-brown-fox'
kebabCase('thequickbrownfox');  // 'thequickbrownfox'
kebabCase('the - quick * brown# fox');  // 'the-quick-brown-fox'
kebabCase('theQUICKBrownFox');  // 'the-quick-brown-fox'
```

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [install](#install)
- [API](#api)
  * [ESM](#esm)
  * [Common JS](#common-js)
  * [pre-built JS](#pre-built-js)
- [use](#use)
  * [example](#example)

<!-- tocstop -->

</details>

## install

```sh
npm i -S @substrate-system/kebab-case
```

## API
This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import { kebabCase } from '@substrate-system/kebab-case'
```

### Common JS
```js
const { kebabCase } = require('@substrate-system/kebab-case')
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/kebab-case/dist/module.min.js ./public
```

#### HTML
```html
<script type="module" src="./module.min.js"></script>
```

## use
Take a string in any format, return a URL-safe kebab case string.

### example
```js
import { kebabCase } from '@substrate-system/kebab-case'

kebabCase('the quick brown fox');  // 'the-quick-brown-fox'
kebabCase('the-quick-brown-fox');  // 'the-quick-brown-fox'
kebabCase('the_quick_brown_fox');  // 'the-quick-brown-fox'
kebabCase('theQuickBrownFox');  // 'the-quick-brown-fox'
kebabCase('theQuickBrown Fox');  // 'the-quick-brown-fox'
kebabCase('thequickbrownfox');  // 'thequickbrownfox'
kebabCase('the - quick * brown# fox');  // 'the-quick-brown-fox'
kebabCase('theQUICKBrownFox');  // 'the-quick-brown-fox'
```
