import { ElementRef, Renderer2, ViewContainerRef } from "@angular/core";
import { Button } from "./button";
import { MatButton } from "@angular/material/button";

export class MaterialButton implements Button {

    constructor(private renderer: Renderer2, private viewContainerRef: ViewContainerRef) {

    }

    render(text: string, parent: ElementRef<any>): void {
        const matButton = this.viewContainerRef.createComponent(MatButton);
        matButton.instance.color = 'primary';

        const buttonText = this.renderer.createText(text);
        this.renderer.appendChild(matButton.instance._elementRef.nativeElement, buttonText);
        this.renderer.appendChild(parent.nativeElement, matButton.instance._elementRef.nativeElement);
    }
}