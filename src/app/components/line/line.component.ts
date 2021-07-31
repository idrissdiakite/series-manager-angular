import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() firstRelease: Date;

  series: Array<Serie>;
  detailsUrl: string;
  commentUrl: string;
  editUrl: string;

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
    this.detailsUrl = '/serie/' + this.id;
    this.editUrl = '/serie/edit/' + this.id;
    this.commentUrl = '/serie/comment/' + this.id;
  }

   /**
   * Delete a serie by id
   * @param serieId
   */
  onClickDeleteSerie(serieId) {
    this.serieService.deleteSerie(+serieId);
  
  }

}
