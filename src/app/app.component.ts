import { Component } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetB';
  posts:any;
  description = "";
  rechercher = "";
  resultatRecherche = "";

  constructor(private webServiceService:WebServiceService){}

  ngOnInit(){
  }

  ExecuteWS(){
    this.webServiceService.GetPosts().subscribe(data => {
      this.posts = data;
      this.posts.forEach(post => {
        console.log("Titre : " + post["title"]);
      });
    });
  }
  afficherDescription(event){
    this.description = event.srcElement.name;
    console.log(this.description);
  }

  rechercherFiltre(input){
    this.description = this.posts.filter(post => post==this.rechercher);
    console.log(this.description);
  }
}