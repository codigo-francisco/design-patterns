import { IDialog } from "./idialog";

export class NativeDialog implements IDialog {
    render(message: string): void {
        const result = confirm(message);
        this.onClick(result);
    }
    onClick(data: any): void {
        alert(`Respondió: ${data}`);
    }
}