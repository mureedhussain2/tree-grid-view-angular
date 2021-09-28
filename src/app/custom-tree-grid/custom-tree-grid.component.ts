import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
  selector: 'app-custom-tree-grid',
  templateUrl: './custom-tree-grid.component.html',
  styleUrls: ['./custom-tree-grid.component.css']
})
export class CustomTreeGridComponent implements OnInit {

  data: object[] = [];

  constructor() { }

  ngOnInit(): void {
      this.data = data;
  }

}
