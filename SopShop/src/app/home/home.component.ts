import { Component, OnInit } from '@angular/core';
import { IListPeople } from '../1.CommonModel/list-people';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: IListPeople[]= [];
  constructor(private _listPeopleService: ServerHttpService) { }
  getAll() {
    this._listPeopleService.getList().subscribe(res => {
      this.lists = res, console.log(this.lists)
    });
  }
  ngOnInit(): void {
    this.getAll();
  }
  onDel() {

  }
  onEdit() {
    
  }
}
