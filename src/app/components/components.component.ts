import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ITreeNode } from './tree-node/tree-node.interface';
import { readProperty } from '../utils/readProperty.util';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  formGroup!: FormGroup;
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
  };
  myPropValue = 'test ng model';
  images = [
    '../../../assets/images/pexels1.jpg',
    '../../../assets/images/pexels2.jpg',
    '../../../assets/images/pexels3.jpg',
    '../../../assets/images/pexels4.jpg',
    '../../../assets/images/pexels5.jpg',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      files: [FileList],
    });

    this.formGroup.get('files')?.valueChanges.subscribe(console.log);

    const obj = {
      a: {
        b: {
          c: 'Hello World'
        }
      }
    };
    
    const value = readProperty(obj, 'a.b.c');
    console.log(value); // Output: Hello World
  
  }
}
