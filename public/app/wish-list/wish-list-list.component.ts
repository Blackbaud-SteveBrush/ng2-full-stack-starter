import { Component, OnInit } from '@angular/core';
import { WishList } from './wish-list.interface';
import { WishListService } from '../shared/services/wish-list.service';


@Component({
  selector: 'wish-list-list',
  template: require('./wish-list-list.component.html')
})
export class WishListListComponent implements OnInit {

  wishLists: WishList[];

  constructor(
    private wishListService: WishListService) { }

  ngOnInit(): void {
    this.getWishLists();
  }

  private getWishLists(): void {
    this.wishListService.getAll()
      .then(data => this.wishLists = data);
  }
}
