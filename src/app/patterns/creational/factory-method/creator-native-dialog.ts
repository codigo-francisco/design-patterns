import { Dialog } from "./dialog";
import { IDialog } from "./idialog";
import { NativeDialog } from "./native-dialog";

export class CreatorNativeDialog extends Dialog{
    override createDialog(): IDialog {
        return new NativeDialog();
    }
}