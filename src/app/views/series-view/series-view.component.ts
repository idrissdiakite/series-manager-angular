import { SerieService } from './../../services/serie/serie.service';
import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.css']
})
export class SeriesViewComponent implements OnInit {

  series: Array<Serie>;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.series = this.serieService.series;
  }

}
