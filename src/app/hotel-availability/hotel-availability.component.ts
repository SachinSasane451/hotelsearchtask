import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-availability',
  templateUrl: './hotel-availability.component.html',
  styleUrls: ['./hotel-availability.component.scss']
})
export class HotelAvailabilityComponent implements OnInit {
  hotels: any[] = [];
  displayedHotels: any[] = [];
  location: string = 'your location'; // Replace with actual location logic
  loading = false;

  currentPage = 1;
  itemsPerPage = 50;
  pageCount = 1;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.loading = true;
   
    setTimeout(() => {
      this.hotels = this.hotelService.getHotelResults();
      this.pageCount = Math.ceil(this.hotels.length / this.itemsPerPage);
      this.setPage(1);
      this.loading = false;
    }, 1000);
  }

  handleImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/400x300?text=Hotel+Image+Not+Available';
  }

  getFacilityIcon(facilityName: string): string {
    const icons: { [key: string]: string } = {
      'Elevator': 'fa-elevator',
      'Safe deposit box': 'fa-lock',
      'Pool': 'fa-swimming-pool',
      'WiFi': 'fa-wifi',
      'Restaurant': 'fa-utensils',
      'Air Conditioning': 'fa-snowflake',
      'Parking': 'fa-parking',
      'Gym': 'fa-dumbbell',
      'Spa': 'fa-spa'
    };
    return icons[facilityName] || 'fa-check';
  }

  getTopFacilities(facilities: any[]): any[] {
    return facilities.slice(0, 3);
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pageCount) return;
    this.currentPage = page;
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedHotels = this.hotels.slice(start, end);
  }

  getPages(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i + 1);
  }

  retrySearch() {
    this.ngOnInit();
  }

  bookHotel(hotel: any) {
    alert(`Booking for ${hotel.name}`);
  }

  viewDetails(hotel: any) {
    alert(`Details for ${hotel.name}`);
  }
}
