import { NgModule } from '@angular/core'
import { ComponentsComponent } from './components.component'
import { NgxColorsModule } from 'ngx-colors'
import { ComponentHolderModule } from './component-holder/component-holder.module'
import { ContentChildModule } from './content-child/content-child.module'
import { FileUploaderModule } from './file-uploader/file-uploader.module'
import { ImageListGalleryModule } from './image-list-gallery/image-list-gallery.module'
import { NgTemplateModule } from './ng-template/ng-template.module'
import { ViewChildModule } from './view-child/view-child.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ImageClassifierService } from '../services/image-classifier.service'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { TreeNodeModule } from './tree-node/tree-node.module'
import { NgModelModule } from './ng-model/ng-model.module'
import { SignalsModule } from './signals/signals.module'

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
    },
]

const components = [
    NgxColorsModule,
    FileUploaderModule,
    ViewChildModule,
    ContentChildModule,
    ImageListGalleryModule,
    ComponentHolderModule,
    NgTemplateModule,
    TreeNodeModule,
    NgModelModule,
    SignalsModule,
]

@NgModule({
    declarations: [ComponentsComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        components,
    ],
    exports: [RouterModule],
    providers: [ImageClassifierService],
})
export class ComponentsModule {}
