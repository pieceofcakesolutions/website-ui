import { Component, Input, OnInit } from '@angular/core';
import { ContactInfo } from './app.component';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer -->
    <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-4 col-6-medium col-12-small">
                    <section>
                        <header>
                            <h2>Top IT Links</h2>
                        </header>
                        <ul class="divided">
                            <li>
                                <a href="#">Enhance your product delivery pipeline with these 5 DevOps practices.</a>
                            </li>
                            <li>
                                <a href="#">Top 5 reasons you should be building infrastructure as code.</a>
                            </li>
                            <li>
                                <a href="#">Getting started with Piece of Cake managed services.</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                    <section>
                        <header>
                            <h2>Top 3D Links</h2>
                        </header>
                        <ul class="divided">
                            <li>
                                <a href="#">3 essential tricks to fine tune your prints!</a>
                            </li>
                            <li>
                                <a href="#">Ultimate list of 3D prints for beginners.</a>
                            </li>
                            <li>
                                <a href="#">Design your own cake toppers with FreeCAD.</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div class="col-6-medium col-12-small">
                    <section>
                        <header>
                            <h2>Contact Info</h2>
                        </header>
                        <ul class="social">
                            <li><a class="icon brands fa-instagram" href="{{contactInfo.instagram}}"><span class="label">Instagram</span></a></li>
                        </ul>
                        <ul class="contact">
                            <li>
                                <h3>Mail</h3>
                                <p><a href="#">{{contactInfo.email}}</a></p>
                            </li>
                            <li>
                                <h3>Phone</h3>
                                <p>{{contactInfo.phone}}</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <div class="col-12">

                    <!-- Copyright -->
                    <div id="copyright">
                        <ul class="links">
                            <li>&copy; {{title}}. All rights reserved.</li>
                            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>
  `,
})
export class FooterComponent implements OnInit {
  @Input() title: string = '';
  @Input() contactInfo: ContactInfo = {
    phone: '',
    instagram: '',
    email: '',
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
