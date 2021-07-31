import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.css']
})
export class CommentsViewComponent implements OnInit {

  serie: Serie;
  comments: Array<Comment>;

  constructor(private serieService: SerieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.serie = this.serieService.getSerieById(+id);
    this.comments = this.serie.comments;
    console.log(this.comments)
  }

     /**
   * Delete a comment by id
   * @param commentId
   */
  onClickDeleteComment(commentId) {
    this.serieService.deleteComment(+commentId);
  
  }

}
