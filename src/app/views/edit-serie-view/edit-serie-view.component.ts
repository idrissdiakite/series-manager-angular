import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-edit-serie-view',
  templateUrl: './edit-serie-view.component.html',
  styleUrls: ['./edit-serie-view.component.css']
})
export class EditSerieViewComponent implements OnInit {

  serie: Serie;
  msg: string;

  constructor(private serieService: SerieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;
    this.serie = this.serieService.getSerieById(+id);
  }

  /**
  * Method for handle submit of the edit serie form
  */

  onSubmitEditSerie(): void {
    this.serieService.editSerie(this.serie).then(() => {
      this.msg = 'Modification réussie !';
      setTimeout(() => {
        this.msg = undefined;
       }, 3000);
  });
}

}
