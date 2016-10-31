import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishList } from './wish-list';
import { WishListService } from './wish-list.service';

@Component({
  selector: 'wish-lists',
  template: require('./wish-lists.component.html'),
  styles: [
    require('./wish-lists.component.scss')
  ]
})
export class WishListsComponent implements OnInit {
  wishLists: WishList[];
  selectedWishList: WishList;

  constructor(
    private router: Router,
    private wishListService: WishListService) {}

  ngOnInit(): void {
    this.getWishLists();
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/wish-list', id]);
  }

  private getWishLists(): void {
    this.wishListService.getAll().then((data: WishList[]) => {
      this.wishLists = data;
    });
  }
}
