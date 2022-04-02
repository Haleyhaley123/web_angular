import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-list-add',
  templateUrl: './data-list-add.component.html',
  styleUrls: ['./data-list-add.component.css']
})
export class DataListAddComponent implements OnInit {
  public addForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    department: new FormControl(''),
    birthday: new FormControl(''),
    phone: new FormControl('')
   
  });
  constructor() { }

  ngOnInit(): void {
  }
  //thêm dữ liệu
  onSubmit() {

  }
}
