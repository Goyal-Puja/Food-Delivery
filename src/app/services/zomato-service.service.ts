import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZomatoServiceService {

  constructor(private http: HttpClient) { }


  getAllFoodCategory() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory");
  }
}
