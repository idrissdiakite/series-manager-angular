import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-single-serie-view',
  templateUrl: './single-serie-view.component.html',
  styleUrls: ['./single-serie-view.component.css']
})
export class SingleSerieViewComponent implements OnInit {

  serie: Serie;

  constructor(private route: ActivatedRoute, private serieService: SerieService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.serie = this.serieService.getSerieById(+id)
  }

}
