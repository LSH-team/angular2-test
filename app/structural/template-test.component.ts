import { Component } from '@angular/core';

@Component({
    selector: 'template-test',
    templateUrl: 'template-test.html',
    moduleId: module.id
})

export class TemplateTestComponent {
    condition = true;
    isVisible = true;
    logs: string[] = [];
}