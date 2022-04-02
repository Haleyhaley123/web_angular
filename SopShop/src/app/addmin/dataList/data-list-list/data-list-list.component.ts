import { Component, OnInit } from '@angular/core';
import { IListPeople } from 'src/app/1.CommonModel/list-people';
import { ServerHttpService } from 'src/app/Services/server-http.service';

@Component({
  selector: 'app-data-list-list',
  templateUrl: './data-list-list.component.html',
  styleUrls: ['./data-list-list.component.css']
})
export class DataListListComponent implements OnInit {

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
  //xóa
  onDel(id: number) {
    alert('Bạn có muốn xóa id' +id);
    this._listPeopleService.deleteList(id).subscribe(res => {
      this.getAll();
    })
  }
  //sửa
  onEdit() {
    alert('Bạn có sửa');
    this._listPeopleService.editData().subscribe(res => {
      this.getAll();
    })
  }

  //thêm
  onSubmit() {

  }
}
