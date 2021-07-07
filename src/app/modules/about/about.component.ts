import { Component, OnInit } from '@angular/core';

export interface Employee {
  name: string,
  backgroundInfo?: string,
  interests?: string[],
  title?: string,
  twitter?: string,
  linkedin?: string,
  email?: string,
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
      backgroundInfo: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
      interests: ['Guitar', 'Music', 'Traveling']
    },
    {
      name: 'Derek Spiner',
      backgroundInfo: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
      interests: ['Electronics', '3D Printing', 'Music', 'Cars']
    },
    {
      name: 'Jeff Morrell',
      backgroundInfo: 'Over 10 years experience as an IT professional focusing my skills on DevOps and Cloud Engineering. I have found that over the years my greatest passion has been when teaching others about and how to use new technologies. That is why as a cofounder of this company I have volunteered my vision and direction around this passion to help others succeed in their ventures.',
      interests: ['Skateboarding', 'Electronics', '3D Printing', 'Kayaking', 'Hiking'],
      email: "jemorrell@gmail.com",
      twitter: "https://twitter.com/thejeffmorrell",
      linkedin: "https://www.linkedin.com/in/jeff-morrell-b5651526",
      title: "CEO and CVO",
    },
    {
      name: 'Josh Fisk',
      backgroundInfo: 'Quality-centered IT professional with 12 years of experience focused on team leadership, desktop and help desk support. Proven ability to create and deliver solutions that meet corporate objectives tied to business and technology performance.',
      interests: ['Woodworking', 'Electronics', 'Guitar', 'Music']
    },
    {
      name: 'Josh Paredes',
      backgroundInfo: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
      interests: ['Guitar', 'Music', 'Traveling']
    },
    {
      name: 'Michael Bratton',
      backgroundInfo: 'Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.',
      interests: ['Rock climbing', 'Camping', 'Running', 'Guitar', 'Music']
    },
  ];

  constructor() { }

  ngOnInit(): void {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("homepage");   //remove the class
    body.classList.add("no-sidebar");   //add the class
  }
  hasSocialMedia(employee: Employee) {
    if (
      employee.email !== undefined
      || employee.linkedin !== undefined
      || employee.twitter !== undefined
    ) {
      return true
    }
    else {
      return false
    }
  }
}
