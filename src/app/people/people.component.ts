import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  templateUrl: './people.component.html',
  imports: [CommonModule],
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any[] = [];

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getPeople().subscribe((data: any[]) => {
      this.people = data;
    });
  }
}
