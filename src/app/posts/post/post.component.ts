import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postID: any;
  list: any[];
  fontSize = 24;
  public title = '汽車誌';
  keyword: string;
  newCars;
  cars
  constructor(private route: ActivatedRoute,private carService:CarService) { }

  ngOnInit() {
    this.route.params.subscribe((query) => {
      this.postID = query['id']
    })

    this.carService.getData().subscribe(e => this.newCars = this.cars = e)
  }

  enlarge() {
    this.fontSize++
  }

  search(event) {
    this.newCars = [];
    this.cars.forEach(element => {
      this.newCars.push(Object.assign({}, element))
    });
    // this.newCars = this.newCars.filter(i => i.name.indexOf(event) > -1 || !event)

    this.newCars = this.newCars.filter(i => i.name.toLowerCase().includes(event.toLowerCase()) || !event)
  }


}
