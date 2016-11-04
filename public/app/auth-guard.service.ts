import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { SessionService } from './shared/services/session.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private sessionService: SessionService) { }

  canActivate(): void {
    return this.sessionService.getStatus();
  }
}
