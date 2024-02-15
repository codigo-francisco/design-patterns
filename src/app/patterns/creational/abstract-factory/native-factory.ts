import { Renderer2 } from "@angular/core";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { GUIFactory } from "./gui-factory";
import { NativeButton } from "./native-button";
import { NativeCheckbox } from "./native-checkbox";

export class NativeFactory implements GUIFactory {
    constructor(private renderer: Renderer2) {

    }

    createButton(): Button {
        return new NativeButton(this.renderer);
    }
    createCheckbox(): Checkbox {
        return new NativeCheckbox(this.renderer);
    }
}