import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { Message } from './models/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData: FormGroup = this.builder.group({});

  constructor(
    private builder: FormBuilder,
    private contact: ContactService
  ) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
      })
  }

  onSubmit(formData: Message) {
    console.log(formData)
    this.contact.sendMessage(formData)
  }
}
