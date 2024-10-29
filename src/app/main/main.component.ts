import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadFavorite();
  }

  save(): void {
    localStorage.setItem("liked", "true");
  }

  loadFavorite(): void {
    const favorite = document.getElementById('favorite');
    if (localStorage.getItem('liked') === 'true') {
      if (favorite) {
        favorite.innerHTML = "Merci d'avoir aimé nos produits!";
      }
    }
  }
}

