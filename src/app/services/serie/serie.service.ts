import { Serie } from './../../models/serie.model';
import { Injectable } from '@angular/core';
import { Comment } from './../../models/comment.model';
import { CommentService } from '../comment/comment.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series: Array<Serie>;
  comments: Array<Comment>;
  
  constructor(private commentService: CommentService) { 
    this.series = [
      new Serie('Game of Thrones', new Date('2011-01-01'), 8, 
                "Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.", 
                "Après seulement quelques minutes de la saga épique de la chaîne HBO Game of Thrones, il devient clair que le buzz était justifié et que l'attente en valait le coup (...) Il est compliqué d'isoler l'élément le plus réussi de la série. Son ambition est immense, le monde fantastique exceptionnellement bien dépeint, l'écriture comme le jeu achèvent de l'élever bien au-dessus de shows similaires comme The Borgias ou Camelot, et le rendu visuel continue de surprendre épisode après épisode. Ce que nous avons ici c'est un assemblage parfaitement réussi entre une saga littéraire reconnue et une série télévisée qui illumine et transcende les mots couchés sur le papier. Est-ce que l'attente en valait la peine ? Absolument. Et même si vous ne connaissez rien de cet univers, vous devriez de toute façon être embarqués dès le début dans ce conte fantastique de George R.R. Martin.", 
                'https://images-na.ssl-images-amazon.com/images/I/81iZ0r1HvmL.jpg', 
                [new Comment(new Date(), 'Pierre', "Super série", 1), new Comment(new Date(), 'Patrick', "Bien", 8)]),
      new Serie('Breaking Bad', new Date('2008-01-01'), 5, 
                "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. Son quotidien déjà morose devient carrément noir lorsqu'il apprend qu'il est atteint d'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre. Pour réunir rapidement beaucoup d'argent afin de mettre sa famille à l'abri, Walter ne voit plus qu'une solution : mettre ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth, une drogue de synthèse qui rapporte beaucoup. Il propose à Jesse, un de ses anciens élèves devenu un petit dealer de seconde zone, de faire équipe avec lui. Le duo improvisé met en place un labo itinérant dans un vieux camping-car. Cette association inattendue va les entraîner dans une série de péripéties tant comiques que pathétiques.", 
                "Breaking Bad mélange le désespoir et la déviance pour produire un produit versatile et précieux.", 'https://pbs.twimg.com/media/EVPo41vVAAEaZYM.jpg:large', 
                [new Comment(new Date(), 'Paul', "Breaking Bad est une drogue dure qui rend dépendant assez vite.", 2)]),
      new Serie('The Leftovers', new Date('2014-01-01'), 3, 
                "Du jour au lendemain, un 14 octobre en apparence ordinaire, 2% de la population disparaît mystérieusement de la surface de la terre. Ces gens, de tout âge, se sont évanouis dans la nature, sans explication, laissant leurs proches dans l'angoisse, voire le désespoir. Trois ans plus tard, la vie a repris son cours dans la bourgarde de Mapleton, une petit ville près de New York, mais rien n'est plus comme avant. Personne n'a oublié ce qui s'est passé, ni ceux qui ont disparu. A l'approche des cérémonies de commémoration, le chef de la police locale, Kevin Garvey, est en état d'alerte maximale : des affrontements dangereux se préparent entre la population et un groupuscule comparable à une secte...", 
                "Il faut plusieurs épisodes avant d’entrer dans le vif du sujet, mais une fois que le show est lancé, la série devient vraiment intéressante. Les relations entre les personnages se brisent de manière très astucieuse, à tel point que la cause devient presque secondaire.", 'https://pbs.twimg.com/media/EnW3jOpXEAQ-LXh.jpg:large', 
                [new Comment(new Date(), 'Jacques', "La meilleurs serie de tous les temps avec une musique exceptionnelle et une histoire très touchante !", 3)]),
      new Serie('Mon Oncle Charlie', new Date ('2003-01-01'), 12, 
                "La vie d'un riche célibataire est bouleversée lorsque son frère divorcé et son neveu de 10 ans débarquent dans sa propriété de Malibu. Malgré leurs différences, les deux frères décident de co-habiter pour offrir un foyer au jeune Jake.", "Une des séries les plus drôles parfaites interprétations et bon casting des episodes cultes", 'https://images-na.ssl-images-amazon.com/images/I/91cAzbQxA2L._AC_SL1500_.jpg', 
                [new Comment(new Date(), 'Jean', "5/5", 4)]),
      new Serie("Le Prince de Bel'Air", new Date ('1990-01-01'), 6, 
                "Ado des quartiers pauvres de Philadelphie, Will Smith part vivre chez son oncle et sa tante Banks dans le riche quartier de Bel-Air...", "Très bonne sitcom comique qui a révélé Will Smith qui incarne la série avec talent.", 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/08/fresh-prince.jpg', 
                [new Comment(new Date(), 'Christophe', "Début un peu mou mais très bonne fin", 5)]),
      new Serie('Malcom', new Date ('2000-01-01'), 7, 
                "Petit génie malgré lui, Malcolm vit dans une famille hors du commun. Le jeune surdoué n'hésite pas à se servir de son intelligence pour faire les 400 coups avec ses frères. Et les parents tentent tant bien que mal de canaliser l'énergie de ces petits démons.", "Une série télévisée qui nous propose de suivre la vie d’une famille américaine moyenne dans laquelle parents et enfants sont complètement déjantés. Les différentes histoires sont hilarantes et farfelues, et les épisodes, indépendants, regorgent à chaque fois d’humour et d’inventivité, offrant un joli renouvellement de gags.", 
                'https://i.pinimg.com/originals/cc/24/98/cc24987f5f519a2cf08f202bd287402f.jpg', 
                [new Comment(new Date(), 'Marie', "J'ai dévoré la série", 6)]),
      new Serie('Les Simpson', new Date ('1989-01-01'), 32, 
                "Les Simpson, famille américaine moyenne, vivent à Springfield. Homer, le père, a deux passions : regarder la télé et boire des bières. Mais son quotidien est rarement reposant, entre son fils Bart qui fait toutes les bêtises possibles, sa fille Lisa qui est une surdouée, ou encore sa femme Marge qui ne supporte pas de le voir se soûler à longueur de journée.", "Une série animée culte, aux clins d’œil, parodies et références nombreuses et efficaces. Les personnages sont attachants et hilarants, et chaque épisode est riche dans sa critique de la société ou de l’actualité. Une série qui, depuis plus de 25 saisons, réussit le brillant pari de se renouveler sans cesse !", 
                'https://media.senscritique.com/media/000006490512/source_big/Les_Simpson.jpg', 
                [new Comment(new Date(), 'Louise', "Tellement vrai", 7)])
    ];;}

  /**
   * Method for retrieve a serie by id
   * @param serieId
   */
  getSerieById(serieId: number): any {
    for(let serie of this.series){
      if(serie.id === serieId) {
        return serie;
      }
    }
  }

  /**
   * Method for add a new serie on the series array
   * @param newSerie
   */
  addSerie(serieToAdd: Serie): Promise<void> {
    return new Promise((res, rej) => {
      serieToAdd.id = this.series[this.series.length - 1].id + 1;
      this.series.push(serieToAdd);
      res();
    });
  }

  /**
   * Method for edit a serie on the series array
   * @param editSerie
   */
  editSerie(editSerie: Serie): Promise<void> {
    return new Promise((res, rej) => {
      for (let serie of this.series) {
        if (serie.id === editSerie.id) {
          serie = editSerie;
          break;
        }
      }
      res();
    });
  }

  /**
   * Method for delete a serie on the series array
   * @param serieId
   * 
   */
  deleteSerie(serieId: number) {
    for(let i = 0; i < this.series.length - 1; i++){
      if(this.series[i].id === serieId) {
        this.series.splice(i, 1);
      }
    }
  }

  /**
   * Method for delete a serie on the series array
   * @param serieId
   * 
   */
  deleteComment(commentId: number) {
    for(let i = 0; i < this.comments.length - 1; i++){
      if(this.comments[i].id === commentId) {
        this.comments.splice(i, 1);
      }
    }
  }

}

