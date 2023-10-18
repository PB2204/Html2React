# Convert HTML to React JSX

A simple Visual Studio Code plugin that converts html text to React JSX.

Just `cmd + shift + P` -> `Convert HTML to React JSX` in the document you want to edit and run it.


![Html2React](https://github.com/PB2204/Html2React/assets/120979437/7a5162cc-a1c2-4b83-b6d1-ab6fedb69dd9)

## How does it work

It simply replaces html tags with React ones.

Here's the current list:

```js
var mapObj = {
  "class=": "className=",
  "for=": "htmlFor=",
  "-rule": "Rule",
  "stroke-l": "strokeL",
  "stroke-w": "strokeW",
  "<!--": "{/*",
  "-->": "*/}",
  tabindex: "tabIndex",
};
```

[Open a pull request](https://github.com/PB2204/Html2React/compare) to add missing rules.
