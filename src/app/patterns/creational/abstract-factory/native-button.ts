import { ElementRef, Renderer2 } from "@angular/core";
import { Button } from "./button";

export class NativeButton implements Button {
    constructor(private renderer: Renderer2) {

    }

    render(text: string, parent: ElementRef): void {
        const button = this.renderer.createElement('button');
        const textButton = this.renderer.createText(text);

        this.renderer.appendChild(button, textButton);
        this.renderer.appendChild(parent.nativeElement, button);
    }
}