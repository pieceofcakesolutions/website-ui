import { Component, OnInit } from '@angular/core';

export interface Employee {
  name: string,
  backgroundInfo?: string,
  interests?: string[],
  title?: string,
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  employees: Employee[] = [
    {
      name: 'Brandon Kerth',
      interests: ['Guitar', 'Music', 'Traveling']
    },
    {
      name: 'Derek Spiner',
      interests: ['Electronics', '3D Printing', 'Music', 'Cars']
    },
    {
      name: 'Jeff Morrell',
      backgroundInfo: 'Over 10 years experience as an IT professional focusing my skills on DevOps and Cloud Engineering. I have found that over the years my greatest passion has been when teaching others about and how to use new technologies. That is why as a cofounder of this company I have volunteered my vision and direction around this passion to help others succeed in their ventures.',
      interests: ['Skateboarding', 'Electronics', '3D Printing', 'Kayaking', 'Hiking']
    },
    {
      name: 'Josh Fisk',
      backgroundInfo: 'Quality-centered IT professional with 12 years of experience focused on team leadership, desktop and help desk support. Proven ability to create and deliver solutions that meet corporate objectives tied to business and technology performance.',
      interests: ['Woodworking', 'Electronics', 'Guitar', 'Music']
    },
    {
      name: 'Josh Paredes',
      interests: ['Guitar', 'Music', 'Traveling']
    },
    {
      name: 'Michael Bratton',
      interests: ['Rock climbing', 'Camping', 'Running', 'Guitar', 'Music']
    },
  ];

  constructor() { }

  ngOnInit(): void {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("homepage");   //remove the class
    body.classList.add("no-sidebar");   //add the class
  }

}