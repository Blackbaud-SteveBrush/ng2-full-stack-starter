import { Injectable } from '@angular/core';
import { WishList } from './wish-list.model';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Crudable, CrudAuthorization } from '../classes/crudable';

@Injectable()
export class WishListService extends Crudable {
  constructor(http: Http) {
    super(http, 'wish-lists', [
      new CrudAuthorization('delete', 'DELETE_WISH_LIST'),
      new CrudAuthorization('post', 'CREATE_WISH_LIST'),
      new CrudAuthorization('put', 'UPDATE_WISH_LIST')
    ]);
  }
}
