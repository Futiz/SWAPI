import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planets',
  imports: [CommonModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent {
  people: any[] = [];

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getPlanets().subscribe((data: any[]) => {
      this.people = data;
    });
  }
}