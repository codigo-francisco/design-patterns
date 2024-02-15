import { ElementRef, Renderer2 } from "@angular/core";
import { Checkbox } from "./checkbox";

export class NativeCheckbox implements Checkbox {
    constructor(private renderer: Renderer2) {

    }

    render(text: string, parent: ElementRef): void {
        const checkbox = this.renderer.createElement('input');
        checkbox.type = 'checkbox';
        const checkboxText = this.renderer.createText(text);

        this.renderer.appendChild(parent.nativeElement, checkboxText);
        this.renderer.appendChild(parent.nativeElement, checkbox);
    }
}