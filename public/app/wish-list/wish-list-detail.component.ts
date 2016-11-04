import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { WishList } from './wish-list.model';
import { WishListService } from '../shared/services/wish-list.service';

@Component({
  selector: 'wish-list-detail',
  template: require('./wish-list-detail.component.html')
})
export class WishListDetailComponent implements OnInit {
  wishList: WishList;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private wishListService: WishListService) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id: string = params['id'];
      this.wishListService.getById(id)
        .then((data: WishList) => {
          this.wishList = data;
        });
    });
  }
}
