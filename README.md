# portfolio



## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## CSS（SCSS）設計
基本的にはBEM（MindBEMding）。

ただしバリエーションやパターン違いについてはBEMのModifier、一時的な状態変化（stateの変化）はSMACSSのStateを用いる
``` bash
.global-menu {}
.global-menu__content {}
.global-menu__content--primary {}
.global-menu__content.is-open {}


```
