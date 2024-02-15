import { Renderer2, ViewContainerRef } from "@angular/core";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { GUIFactory } from "./gui-factory";
import { MaterialButton } from "./material-button";
import { MaterialCheckbox } from "./material-checkbox";

export class MaterialFactory implements GUIFactory {

    constructor(private renderer: Renderer2, private viewContainerRef: ViewContainerRef) {}

    createButton(): Button {
        return new MaterialButton(this.renderer, this.viewContainerRef);
    }

    createCheckbox(): Checkbox {
        return new MaterialCheckbox(this.renderer, this.viewContainerRef);
    }

}