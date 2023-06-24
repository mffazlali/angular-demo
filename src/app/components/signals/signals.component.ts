import {
    Component,
    signal,
    OnInit,
    Input,
    WritableSignal,
    computed,
    effect,
} from '@angular/core'

@Component({
    selector: 'app-signals',
    templateUrl: './signals.component.html',
    styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent implements OnInit {
    // make inputs as mandatory
    @Input({ alias: 'dValue', required: true }) defaultValue: number = 0

    count!: WritableSignal<number>

    doubleCount = computed(() => this.count() * 2)

    constructor() {
        // effect(() => {
        //     console.log(`current count value: ${this.count}`)
        // })
    
    }

    ngOnInit() {
        this.count = signal(this.defaultValue)
    }

    increment() {
        this.count.update((c) => c + 1)
    }
}
