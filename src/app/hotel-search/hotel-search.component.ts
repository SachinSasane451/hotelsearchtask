import { Component } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent {
  searchData = {
    location: 'SIN',
    checkin_date: '20-01-2025',
    checkout_date: '22-02-2025',
    rooms: 1,
    guests: 1,
  };

  constructor(private hotelService: HotelService, private router: Router) {}

  onSubmit() {
    this.hotelService.searchHotels(this.searchData).subscribe(response => {
      this.hotelService.setHotelResults(response.message.hotels);
      this.router.navigate(['/hotel-availability']);
    });
  }
}
