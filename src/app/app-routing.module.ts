import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelAvailabilityComponent } from './hotel-availability/hotel-availability.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';

const routes: Routes = [
  { path: '', component: HotelSearchComponent },
  { path: 'hotel-availability', component: HotelAvailabilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
