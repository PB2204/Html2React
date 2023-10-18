# Convert HTML to React JSX

A simple Visual Studio Code plugin that converts html text to React JSX.

Just `ctrl + shift + P` -> `Convert HTML to React JSX` in the document you want to edit and run it.

![converting and html text to JSX](https://raw.githubusercontent.com/PB2204/Html2React/master/gif/Html2React.gif)

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
