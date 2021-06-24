import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listSKills = [
    {
      'Name': 'Angular',
      'value': 90
    },
    {
      'Name': 'UI Designing',
      'value': 90
    },
    {
      'Name': 'UX',
      'value': 40
    },
    {
      'Name': 'HTML',
      'value': 75
    },
    {
      'Name': 'CSS',
      'value': 70
    },
    {
      'Name': 'Typescript',
      'value': 65
    },
    {
      'Name': 'Bootstrap',
      'value': 55
    },
    {
      'Name': 'PWA',
      'value': 40
    },
    {
      'Name': 'Python',
      'value': 65
    },
  ]
}
