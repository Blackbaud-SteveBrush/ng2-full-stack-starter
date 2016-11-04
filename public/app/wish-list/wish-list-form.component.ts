import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { WishList } from './wish-list.model';
import { WishListService } from '../shared/services/wish-list.service';


@Component({
  selector: 'wish-list-form',
  template: require('./wish-list-form.component.html')
})
export class WishListFormComponent implements OnInit {

  public isSubmitted: boolean;
  public thisForm: FormGroup;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private wishListService: WishListService) { }

  ngOnInit(): void {
    this.defineFormFields();
    this.assignFormData();
  }

  create(): void {
    let formData = this.thisForm.value;
    this.wishListService.create(formData)
      .then(data => {
        this.isSubmitted = false;
      });
  }

  submit(): void {
    if (!this.thisForm.valid) {
      return;
    }
    this.isSubmitted = true;
    if (this.thisForm.value._id) {
      this.update();
    } else {
      this.create();
    }
  }

  update(): void {
    let id = this.thisForm.value._id;
    let formData = this.thisForm.value;
    this.wishListService.update(id, formData)
      .then(data => {
        this.isSubmitted = false;
      });
  }

  // Define the form fields.
  private defineFormFields(): void {
    this.thisForm = this.formBuilder.group({
      _id: [''],
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });
  }

  // Retrieve model from the database, if editing.
  private assignFormData(): void {
    this.route.params.forEach((params: Params) => {
      let id: string = params['id'];
      if (id) {
        this.wishListService.getById(id)
          .then(data => {
            (<FormGroup>this.thisForm).patchValue(data, { onlySelf: true });
          });
      }
    });
  }
}
