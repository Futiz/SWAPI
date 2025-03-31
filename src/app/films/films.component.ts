import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films',
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
people: any[] = [];

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getFilms().subscribe((data: any[]) => {
      this.people = data;
    });
  }
}