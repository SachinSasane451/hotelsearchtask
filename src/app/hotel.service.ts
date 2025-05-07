import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotelResults: any[] = [];

  constructor(private http: HttpClient) {}

  searchHotels(data: any): Observable<any> {
    const url = 'https://b2cdev.frappe.cloud/api/method/at_utils.akbar_travels_utils.commonApi.hotel.get_hotel_info';
    const headers = new HttpHeaders({
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWU1NjBjMmU2NTk5OTAxN2FjYTI0ODMiLCJ1bmlxdWVfbmFtZSI6I',
      'Content-Type': 'application/json',
    });
    return this.http.post(url, data, { headers });
  }

  setHotelResults(results: any[]) {
    this.hotelResults = results;
  }

  getHotelResults(): any[] {
    return this.hotelResults;
  }
}
