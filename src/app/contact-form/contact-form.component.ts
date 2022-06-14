import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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

  confirmationUrl: SafeResourceUrl;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  submitForm() {
    //   if (this.contactForm.valid) {
    //     this.httpClient
    //       .post(
    //         'https://mailthis.to/olgakassian@gmail.com',
    //         this.contactForm.value,
    //         { responseType: 'text' }
    //       )
    //       // .subscribe((data) => {
    //       //   // console.log(data);
    //       //   location.href = 'https://mailthis.to/confirm';
    //       // });
    //   }
    // }
    Email.send({
      SecureToken: 'b92f3308-7d67-416d-8d22-caa8598b7096',
      To: 'olgakassian@gmail.com',
      From: 'olga.kassian@olgakassian.com',
      Subject: 'This is the subject',
      Body: 'And this is the body',
    }).then((message: any) => alert(message));
  }
}
