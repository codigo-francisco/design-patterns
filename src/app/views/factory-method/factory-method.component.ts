import { Component } from '@angular/core';
import { CreatorNativeDialog } from '../../patterns/creational/factory-method/creator-native-dialog';
import { CreatorSweetAlertDialog } from '../../patterns/creational/factory-method/creator-sweet-alert-dialog';

@Component({
  selector: 'app-factory-method',
  standalone: true,
  imports: [],
  templateUrl: './factory-method.component.html',
  styleUrl: './factory-method.component.scss'
})
export class FactoryMethodComponent {
  nativeDialog = new CreatorNativeDialog();
  sweetAlertDialog = new CreatorSweetAlertDialog();

  openNativeDialog() {
    this.nativeDialog.render("¿Es un dialogo nativo?");
  }

  openSweetAlertDialog() {
    this.sweetAlertDialog.render('¿Es un dialogo de la librería SweetAlert?');
  }
}
