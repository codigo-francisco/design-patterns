import { Component, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { GUIFactory } from '../../patterns/creational/abstract-factory/gui-factory';
import { NativeFactory } from '../../patterns/creational/abstract-factory/native-factory';
import { MaterialFactory } from '../../patterns/creational/abstract-factory/material-factory';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-abstract-factory',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './abstract-factory.component.html',
  styleUrl: './abstract-factory.component.scss'
})
export class AbstractFactoryComponent {
  @ViewChild('listaBotones') listaBotones?: ElementRef;
  @ViewChild('listaBotonesMaterial') listaBotonesMaterial?: ElementRef;
  guiFactoryNative: GUIFactory;
  guiFactoryMaterial: GUIFactory;

  constructor(renderer: Renderer2, viewContainerRef: ViewContainerRef) {
    this.guiFactoryNative = new NativeFactory(renderer);
    this.guiFactoryMaterial = new MaterialFactory(renderer, viewContainerRef);
  }

  crearBotonNativo() {
    const nativeButton = this.guiFactoryNative.createButton();
    nativeButton.render("Boton nativo", this.listaBotones!);
  }

  crearCheckboxNativo() {
    const checkboxNativo = this.guiFactoryNative.createCheckbox();
    checkboxNativo.render("Check nativo", this.listaBotones!);
  }

  crearBotonMaterial() {
    const materialButton = this.guiFactoryMaterial.createButton();
    materialButton.render("Boton material", this.listaBotonesMaterial!);
  }

  crearMaterialCheckbox() {
    const materialCheckbox = this.guiFactoryMaterial.createCheckbox();
    materialCheckbox.render("Material checkbox", this.listaBotonesMaterial!);
  }
}
