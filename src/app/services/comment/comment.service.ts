import { Comment } from './../../models/comment.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Array<Comment>;

  constructor() { 
    this.comments = [
      new Comment(new Date(), 'Pierre', "Super série", 1),
      new Comment(new Date(), 'Paul', "Nulle", 2),
      new Comment(new Date(), 'Jacques', "Top", 3),
      new Comment(new Date(), 'Jean', "5/5", 4),
      new Comment(new Date(), 'Christophe', "Début un peu mou mais très bonne fin", 5),
      new Comment(new Date(), 'Marie', "J'ai dévoré la série", 6),
      new Comment(new Date(), 'Louise', "Tellement vrai", 7),
    ];;}
}
