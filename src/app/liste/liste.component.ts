import { Component, OnInit } from '@angular/core';
import { AppelListeService } from '../appel-liste.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(private AppelListeService:AppelListeService) { }
  post:any;

  ngOnInit(): void {
  }

  recuperationPost(){
    this.post = this.AppelListeService.getPost(this.AppelListeService.getPosts(),this.AppelListeService.getTitlePost());
  }
}
