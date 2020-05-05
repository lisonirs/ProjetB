import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppelListeService {

  constructor() { }

  posts:any;
  titlePost:any

  response:any;
  getPost(tab, title){
    for(let key in tab){
      if (tab[key]['title'] == title) {
        this.response = tab[key];
      }
    }
    return this.response;
  }

  setPosts(posts){
    this.posts = posts;
  }

  setTitlePost(title){
    this.titlePost = title;
  }

  getPosts(){
    return this.posts;
  }

  getTitlePost(){
    return this.titlePost;
  }
}
