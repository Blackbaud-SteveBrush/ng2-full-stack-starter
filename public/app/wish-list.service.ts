import { Injectable } from '@angular/core';
import { WishList } from './wish-list';

@Injectable()
export class WishListService {

  wishLists: WishList[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  getAll(): Promise<WishList[]> {
    return Promise.resolve(this.wishLists);
  }

  getById(id: number): Promise<WishList> {
    let found = this.wishLists.find((wishList) => {
      return wishList.id === id;
    });
    return Promise.resolve(found);
  }
}
