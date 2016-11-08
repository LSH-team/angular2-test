import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'bypass-security',
    templateUrl: 'bypass-security.component.html',
    moduleId: module.id
})

export class BypassSecurityComponent {
    dangerousUrl: string;
    trustedUrl;
    // dangerousVideoUrl: string;
    // videoUrl;

    constructor(private sanitizer: DomSanitizer) {
        this.dangerousUrl = 'javascript:alert("Hi there")';
        this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    }

    // updateVideoUrl(id: string) {
    //     this.dangerousVideoUrl = 'localhost:3000/#/heroes/' + id;
    //     this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    // }
}