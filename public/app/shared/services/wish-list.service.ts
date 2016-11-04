import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Crudable } from './crudable';

@Injectable()
export class WishListService extends Crudable {
  constructor(http: Http) {
    super(http, 'wish-lists', {
      delete: {
        permission: 'DELETE_WISH_LIST'
      },
      post: {
        permission: 'CREATE_WISH_LIST'
      },
      put: {
        permission: 'UPDATE_WISH_LIST'
      }
    });
  }
}
