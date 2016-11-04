import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../shared/services/session.service';

@Component({
  template: require('./login.component.html')
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
    private sessionService: SessionService) { }

  ngOnInit(): void {
    this.defineFormFields();
  }

  submit(): void {
    if (!this.form.valid) {
      return;
    }
    this.isSubmitted = true;
    this.sessionService.login(this.form.value.emailAddress, this.form.value.password)
      .then(data => {
        this.isSubmitted = false;
        alert("Success!");
      })
      .catch(reason => {
        this.isSubmitted = false;
        alert("Error: " + reason);
      });
  }

  // Define the form fields.
  private defineFormFields(): void {
    this.form = this.formBuilder.group({
      emailAddress: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
  }
}
