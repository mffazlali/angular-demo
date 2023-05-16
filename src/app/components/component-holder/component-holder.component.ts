import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-component-holder',
  templateUrl: './component-holder.component.html',
  styleUrls: ['./component-holder.component.scss']
})
export class ComponentHolderComponent {
  @ViewChild('componentHolder', { read: ViewContainerRef }) componentHolder!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  public createComponent(): void {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FileUploaderComponent);
            const componentRef = this.componentHolder.createComponent<FileUploaderComponent>(componentFactory);
            componentRef.instance.filesMode=true
  }
}
