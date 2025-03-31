import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  people: any[] = [];

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getVehicles().subscribe((data: any[]) => {
      this.people = data;
    });
  }
}