const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations !!! "Html2React" Is Now Activated!');

  let disposable = vscode.commands.registerCommand(
    "Html2React.convert",
    function () {
      // The code you place here will be executed every time your command is executed
      var editor = vscode.window.activeTextEditor;
      if (!editor) {
        return; // No open text editor
      }

      var firstLine = editor.document.lineAt(0);
      var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
      var textRange = new vscode.Range(
        firstLine.range.start,
        lastLine.range.end
      );

      var text = editor.document.getText(textRange);

      function replaceAll(str, mapObj) {
        var re = new RegExp(Object.keys(mapObj).join("|"), "g");

        return str.replace(re, (matched) => mapObj[matched.toLowerCase()]);
      }

      var mapObj = {
        "class=": "className=",
        "for=": "htmlFor=",
        "-rule": "Rule",
        "stroke-l": "strokeL",
        "stroke-w": "strokeW",
        "<!--": "{/*",
        "-->": "*/}",
        "tabindex": "tabIndex",
        "colspan": "colSpan:,
        "rowspan": "rowSpan:,
        "aria-*": "aria-*",
        "data-*": "data-*",
        "onclick": "onClick",
        "onchange": "onChange",
        "onblur": "onBlur",
      };

      var formattedText = replaceAll(text, mapObj);
      
      // Handle self-closing tags
      formattedText = formattedText.replace(/<(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)([^>]*?)(?<!\/)>(<\/\1>|)/g, "<$1$2 />");


      editor.edit((editBuilder) =>
        editBuilder.replace(textRange, formattedText)
      );

      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Your file has just been formatted!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
  activate,
  deactivate,
};
