import { Component, Input } from '@angular/core';
import { ITreeNode } from './tree-node.interface';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent {
  @Input() node!: ITreeNode;
}

