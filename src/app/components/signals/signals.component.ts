import { Component, signal, OnInit } from '@angular/core'

@Component({
    selector: 'app-signals',
    templateUrl: './signals.component.html',
    styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent implements OnInit {
    count = signal(0)

    constructor() {}

    ngOnInit() {}

    increment() {
        this.count.update((c) => c + 1)
    }
}
