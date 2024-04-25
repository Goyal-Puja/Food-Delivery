import { Component, OnInit } from '@angular/core';
import { ZomatoServiceService } from '../../services/zomato-service.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categoryList: any[] = [];
  constructor(private zomatoService: ZomatoServiceService){}
  ngOnInit(): void {
    this.loadAllFoodCategories();
  }

  loadAllFoodCategories(){
    this.zomatoService.getAllFoodCategory().subscribe((res: any) => {
        this.categoryList = res.data;
    })
  }

}
