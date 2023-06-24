import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit, Inject } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ITreeNode } from './tree-node/tree-node.interface'
import { ActivatedRoute, Router } from '@angular/router'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CoinpaprikaService } from '../services/coinpaprika.service'

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
    // Bind Route Info to Component Inputs
    // @Input('coins') coins?: any
    // make inputs as mandatory
    @Input({ alias: 'coins' }) coins?: any

    formGroup!: FormGroup
    node: ITreeNode = {
        name: 'root',
        children: [
            { name: 'a', children: [] },
            {
                name: 'b',
                children: [
                    { name: 'b-1', children: [] },
                    {
                        name: 'b-2',
                        children: [
                            { name: 'b-2-1', children: [] },
                            { name: 'b-2-2', children: [] },
                            { name: 'b-2-3', children: [] },
                        ],
                    },
                ],
            },
            {
                name: 'c',
                children: [
                    { name: 'c-1', children: [] },
                    { name: 'c-2', children: [] },
                ],
            },
        ],
    }
    myPropValue = 'test ng model'
    images = [
        '../../../assets/images/pexels1.jpg',
        '../../../assets/images/pexels2.jpg',
        '../../../assets/images/pexels3.jpg',
        '../../../assets/images/pexels4.jpg',
        '../../../assets/images/pexels5.jpg',
    ]

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router:Router,
        @Inject(CoinpaprikaService) private coinpaprikaService: CoinpaprikaService
    ) {
        this.coinpaprikaService.getListCoin().pipe(takeUntilDestroyed()).subscribe()
    }

    ngOnInit(): void {
        this.formGroup = this.fb.group({
            files: [FileList],
        })

        this.formGroup
            .get('files')
            ?.valueChanges.pipe()
            .subscribe(console.log)

        const obj = {
            a: {
                b: {
                    c: 'Hello World',
                },
            },
        }

        this.route.data.subscribe((value) => {
            console.log(value)
        })
        console.log(this.coins)

        // Navigation information about last successful navigation.
        console.log('last Successful Navigation',this.router.lastSuccessfulNavigation?.previousNavigation)
    }
}
