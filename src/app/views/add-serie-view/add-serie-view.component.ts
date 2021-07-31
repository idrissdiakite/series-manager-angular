import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-add-serie-view',
  templateUrl: './add-serie-view.component.html',
  styleUrls: ['./add-serie-view.component.css']
})
export class AddSerieViewComponent implements OnInit {

  serieForm: FormGroup;
  msg: string;

  constructor(private serieService: SerieService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.serieForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(1) ]],
      firstRelease: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3) ]],
      seasonsNumber: ['', [Validators.required, Validators.min(1) ]],
      description: ['', [Validators.required, Validators.maxLength(258), Validators.min(5) ]],
      review: ['', [Validators.required, Validators.maxLength(258), Validators.min(5) ]],
      picture: ['', [Validators.required, Validators.pattern(reg) ]],
      comment: ['', [Validators.required, Validators.maxLength(258), Validators.min(5) ]],
    });
  }

  /**
   * Method for handle submit of the new serie form
   */

  onSubmitNewSerie(): void {
    const newSerie = new Serie(
      this.serieForm.value.name,
      this.serieForm.value.firstRelease,
      this.serieForm.value.seasonsNumber,
      this.serieForm.value.description,
      this.serieForm.value.review,
      this.serieForm.value.picture,
      this.serieForm.value.comment,
    );

    this.serieService.addSerie(newSerie);
    this.msg = 'Ajout réussi !';

    this.router.navigate(['series']);
  }

}
