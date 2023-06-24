import { Inject, NgModule, inject } from '@angular/core'
import { RouterModule, Routes, Resolve } from '@angular/router'
import { CoinpaprikaDataResolver } from './resolver/coinpaprika-data.resolver'
import { CoinpaprikaService } from './services/coinpaprika.service'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
            import('./pages/home/home-routing.module').then(
                (m) => m.HomeRoutingModule
            ),
    },
    {
        path: 'components',
        pathMatch: 'full',
        data: { components: 'hello components' },
        resolve: {
            coins: CoinpaprikaDataResolver,
        },
        loadChildren: () =>
            import('./components/components.module').then(
                (m) => m.ComponentsModule
            ),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
    providers: [],
})
export class AppRoutingModule {}
