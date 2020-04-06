import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from '../shared/shared.module';

import { ADOPTIONS_ROUTE, AdoptionsComponent } from './';

@NgModule({
  imports: [StoreSharedModule, RouterModule.forRoot([ADOPTIONS_ROUTE], { useHash: true })],
  declarations: [AdoptionsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreAppAdoptionsModule {}
