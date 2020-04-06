import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from '../shared/shared.module';

import { DONS_ROUTE, DonsComponent } from './';

@NgModule({
  imports: [StoreSharedModule, RouterModule.forRoot([DONS_ROUTE], { useHash: true })],
  declarations: [DonsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreAppDonsModule {}
