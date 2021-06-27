import { Component } from '@angular/core';

export interface BlogPost {
  title: string;
  content: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piece of Cake Solutions';
  blogPosts: BlogPost[] = [
    {
      title: "Pulumi - The top Infrastructure as code tool of 2021!",
      content: `
        <p>If you've been wanting to venture into Infrastructure as Code or have been using other products and aren't satisfied with the tool, look no further.</p>
        <p>Pulumi is the tool of choice for IT automation and Infrastructure as Code deployments at Piece of Cake Solutions.</p>
        <p>Pulumi works with a wide range of providers to offer you a large spread of capabilities to empower your automation workflows.</p>
        <p>The company is fast at work to constantly upgrade their product based on their customer feedback. Our Engineers have worked with Pulumi for years and have experienced this rapid success firsthand. We want to make using Pulumi a piece of cake for you and your company!</p>
        <p>Look forward to our upcoming posts on how to manage your cloud infrastructure with Pulumi!</p>
      `
    },
    {
      title: "Our top 5 reasons to build infrastructure as code!",
      content: `
        <ol>
          <li>Infrastructure is natrually documented through the tool.</li>
          <li>Code can be version controlled allowing for finer view into what's being managed and by who.</li>
          <li>Standard DevOps and gitflow practices can be implemented to ensure automated quality testing and policy enforcement.</li>
          <li>Common patterns are easily abstracted through templates or module style packages.</li>
          <li>Projects can be encapsulated so that all resources can be easily deployed or destroyed, removing any concern of orphaning items or forgetting resources.</li>
        </ol>
      `
    }
  ];
}
