import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { WishList } from './wish-list.model';
import { WishListService } from './wish-list.service';


@Component({
  selector: 'wish-list-form',
  template: require('./wish-list-form.component.html')
})
export class WishListFormComponent implements OnInit {

  formData: WishList;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private wishListService: WishListService) { }

  ngOnInit(): void {
    this.formData = new WishList();
    this.route.params.forEach((params: Params) => {
      let id = parseInt(params['id']);
      if (!id) {
        return;
      }
      this.wishListService.getById(id)
        .then((data: WishList) => {
          this.formData = data;
        });
    });
  }

  create(): void {
    this.wishListService.create(this.formData).then((data: Object) => {
      console.log("CREATE!", data);
    });
  }

  update(): void {
    this.wishListService.update(this.formData._id, this.formData).then((data: Object) => {
      console.log("UPDATE!", data);
    });
  }
}
