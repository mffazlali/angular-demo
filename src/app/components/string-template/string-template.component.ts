import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

const bgColor = "backgground:'red'"

@Component({
    selector: 'app-string-template',
    standalone: true,
    imports:[CommonModule],
    template: `<h1 style="${bgColor}">{{name}}</h1>`,
    styles: [''],
})
export class StringTemplateComponent {
    name="hello string template"
}
