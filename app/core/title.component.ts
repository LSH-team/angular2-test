import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title.component.html'
})

export class TitleComponent {
    title = 'Angular Modules';
    @Input() subtitle = '';
    user = '';

    constructor(userService: UserService){
        this.user = userService.userName;
    }
}