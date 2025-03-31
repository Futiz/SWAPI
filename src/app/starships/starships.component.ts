import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starships',
  imports: [CommonModule],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css'
})
export class StarshipsComponent {
  people: any[] = [];

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getStarships().subscribe((data: any[]) => {
      this.people = data;
    });
  }
}