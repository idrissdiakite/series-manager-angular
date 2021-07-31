import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

@Input() series: Array <Serie>;

  ngOnInit(): void {
  }

}
