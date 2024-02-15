import { IDialog } from "./idialog";
import SweetAlert2 from 'sweetalert2';

export class SweetAlertDialog implements IDialog {
    render(message: string): void {
        SweetAlert2.fire({
            text: message,
            icon: 'question',
            showConfirmButton: true,
            showDenyButton: true
        }).then((result) => {
            this.onClick(result.value);
        });
    }
    onClick(data: any): void {
        SweetAlert2.fire(undefined, `Resultado: ${data}`);
    }

}