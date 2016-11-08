import { Component } from '@angular/core';

@Component({
    selector: 'inner-html',
    templateUrl: 'inner-html-binding.component.html',
    moduleId: module.id
})

export class InnerHtmlBindingComponent {
    htmlSnippet = 'Template <script>alert("0wned")</script><b>Syntax</b>';
}