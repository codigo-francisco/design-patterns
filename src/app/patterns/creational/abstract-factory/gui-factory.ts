import { Renderer2 } from "@angular/core";
import { Button } from "./button";
import { Checkbox } from "./checkbox";

export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}