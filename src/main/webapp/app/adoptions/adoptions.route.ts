import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { AdoptionsComponent } from './adoptions.component';

export const ADOPTIONS_ROUTE: Route = {
  path: 'adoptions',
  component: AdoptionsComponent,
  data: {
    authorities: [],
    pageTitle: 'adoptions.title'
  },
  canActivate: [UserRouteAccessService]
};
