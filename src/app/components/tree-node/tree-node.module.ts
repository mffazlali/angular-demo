import { NgModule } from '@angular/core';
import { TreeNodeComponent } from './tree-node.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TreeNodeComponent],
  imports:[CommonModule],
  exports: [TreeNodeComponent],
})
export class TreeNodeModule {}
