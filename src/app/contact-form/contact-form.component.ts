import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NewsService } from '../news.service';
declare let Email: any;

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    message: [''],
  });

  isEmailSent = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submitForm() {
    Email.send({
      SecureToken: 'ee0cc95c-9c41-43ad-91f4-bf75c73c3960',
      To: 'olgakassian@gmail.com',
      From: 'olgakassian97@gmail.com',
      Subject: 'New Message From OK Website',
      Body: `Name: ${this.contactForm.value.name} / E-mail: ${this.contactForm.value.email} / Message: ${this.contactForm.value.message} `,
    }).then((message: any) => {
      if (message === 'OK') {
        this.isEmailSent = true;
      }
    });
  }
}
