import { Dialog } from "./dialog";
import { IDialog } from "./idialog";
import { SweetAlertDialog } from "./sweet-alert-dialog";

export class CreatorSweetAlertDialog extends Dialog {
    override createDialog(): IDialog {
        return new SweetAlertDialog();
    }

}