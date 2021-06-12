import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.gugfug', () => {
      vscode.window.showInformationMessage('hey there!');
    }),
  );
}
