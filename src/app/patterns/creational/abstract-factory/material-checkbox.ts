import { ElementRef, Renderer2, ViewContainerRef } from "@angular/core";
import { Checkbox } from "./checkbox";
import { MatCheckbox } from '@angular/material/checkbox';

export class MaterialCheckbox implements Checkbox {
    
    constructor(private renderer: Renderer2, private viewContainerRef: ViewContainerRef) {

    }

    render(text: string, parent: ElementRef<any>): void {
        const checkbox = this.viewContainerRef.createComponent(MatCheckbox);
        checkbox.instance.color = "primary";
        
        const checkboxText = this.renderer.createText(text);

        this.renderer.appendChild(checkbox.instance._elementRef.nativeElement, checkboxText);
        this.renderer.appendChild(parent.nativeElement, checkbox.instance._elementRef.nativeElement);
    }

}