import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superheroes!:Observable<any>;
  filtrado:string='';
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.superheroes=this.dataService.getSuperHeroes();
  }
  onChange(ev:any){
    this.filtrado=ev.detail.value;
  }
}
