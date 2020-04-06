import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { DonsComponent } from './dons.component';

export const DONS_ROUTE: Route = {
  path: 'dons',
  component: DonsComponent,
  data: {
    authorities: [],
    pageTitle: 'dons.title'
  },
  canActivate: [UserRouteAccessService]
};
