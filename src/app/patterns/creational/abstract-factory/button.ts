import { ElementRef } from "@angular/core";

export interface Button {
    render(text: string, parent: ElementRef): void;
}