import { Component, EventEmitter, OnInit } from '@angular/core';
import { from, groupBy, map, merge, mergeMap, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  combinedResult: any[] = [];
  ngOnInit(): void {
    this.toLocalDateString();
  }

  toLocalDateString() {
    const date = new Date('2005-08-02');
    const [year, month, day] = date
      .toLocaleDateString('fa-IR-u-nu-latn', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
      .split('/')
      .map((x) => +x);
    console.log(year, month, day);
  }
}
