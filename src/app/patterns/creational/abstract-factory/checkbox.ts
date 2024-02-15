import { ElementRef, Renderer2 } from "@angular/core";

export interface Checkbox {
    render(text: string, parent: ElementRef): void;
}