import { IDialog } from "./idialog";


export abstract class Dialog {
    render(message: string) {
        const button = this.createDialog();
        button.render(message);
    }

    abstract createDialog(): IDialog;
}