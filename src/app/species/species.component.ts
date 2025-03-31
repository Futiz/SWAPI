import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-species',
  imports: [CommonModule],
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})
export class SpeciesComponent {
  people: any[] = [];

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getSpecies().subscribe((data: any[]) => {
      this.people = data;
    });
  }
}