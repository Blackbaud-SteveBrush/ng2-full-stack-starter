import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class CrudAuthorization {
  constructor(method: string, permission: string, message?: string) {}
}

export abstract class Crudable {
  protected http: Http;
  protected resourceName: string;
  protected authorizations: CrudAuthorization[];

  constructor(
    http: Http,
    resourceName: string,
    authorizations?: CrudAuthorization[]
  ) {
    this.http = http;
    this.resourceName = resourceName;
    this.authorizations = authorizations;
  }

  create(data: any): Promise<any> {
    return this.http.post('/api/' + this.resourceName + '/', data)
      .toPromise()
      .then((res: any) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  getAll(): Promise<any[]> {
    return this.http.get('/api/' + this.resourceName + '/')
      .toPromise()
      .then((res: any) => {
        return res.json().value;
      })
      .catch(this.handleError);
  }

  getById(id: number): Promise<any> {
    return this.http.get('/api/' + this.resourceName + '/' + id)
      .toPromise()
      .then((res: any) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  update(id: number, data: any): Promise<any> {
    return this.http.put('/api/' + this.resourceName + '/', data)
      .toPromise()
      .then((res: any) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
