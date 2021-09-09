import { Component, OnInit } from '@angular/core';

export interface Employee {
  name: string,
  avatarUrl?: string,
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
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  defaultAvatarUrl = 'assets/images/default_company_avatar.png';

  employees: Employee[] = [
    {
      name: 'Brandon Kerth',
      interests: ['Bass Guitar', 'Music', 'Traveling'],
      email: "brandon.kerth@gmail.com",
      linkedin: "https://www.linkedin.com/in/brandonkerth",
      backgroundInfo: "More than 6 years as an IT Support Specialist ranging from onsite MSP work to remote cloud support.  Since joining the industry, my focus has been on delivering repeatable patterns of success in enterprise environments.",
      avatarUrl: 'assets/images/kerth_company_avatar.png',
    },
    {
      name: 'Derek Spiner',
      interests: ['Electronics', '3D Printing', 'Music', 'Cars'],
      email: "econislab@protonmail.com",
      linkedin: "https://www.linkedin.com/in/derek-spiner-professional/",
    },
    {
      name: 'Jeff Morrell',
      backgroundInfo: 'Over 10 years experience as an IT professional focusing my skills on DevOps and Cloud Engineering. I have found that over the years my greatest passion has been when teaching others about and how to use new technologies. That is why as a cofounder of this company I have volunteered my vision and direction around this passion to help others succeed in their ventures.',
      interests: ['Skateboarding', 'Electronics', '3D Printing', 'Kayaking', 'Hiking'],
      email: "jemorrell@gmail.com",
      twitter: "https://twitter.com/thejeffmorrell",
      linkedin: "https://www.linkedin.com/in/jeff-morrell-b5651526",
      avatarUrl: 'assets/images/morrell_company_avatar.png',
    },
    {
      name: 'Josh Fisk',
      backgroundInfo: 'Quality-centered IT professional with 12 years of experience focused on team leadership, desktop and help desk support. Proven ability to create and deliver solutions that meet corporate objectives tied to business and technology performance.',
      interests: ['Woodworking', 'Electronics', 'Guitar', 'Music'],
      avatarUrl: 'assets/images/fisk_company_avatar.png',
      linkedin: 'http://linkedin.com/in/joshua-fisk-5291b05a',
      email: 'fisk.josh@hotmail.com',
    },
    {
      name: 'Josh Paredes',
      interests: ['Guitar', 'Music', 'Traveling'],
      linkedin: 'https://www.linkedin.com/in/joshua-paredes-30aaa292',
      avatarUrl: 'assets/images/paredes_company_avatar.png',
    },
    {
      name: 'Mike Bratton',
      interests: ['Rock climbing', 'Camping', 'Running', 'Guitar', 'Music'],
      linkedin: 'https://www.linkedin.com/in/michael-bratton-149587aa',
      avatarUrl: 'assets/images/bratton_company_avatar.png',
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
