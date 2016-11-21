import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight], input'
})

export class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'background-color', 'powderblue');
    }
}