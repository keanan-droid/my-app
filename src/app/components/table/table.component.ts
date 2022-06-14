import { Component, OnInit } from '@angular/core';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  show: boolean = false;

  constructor(private service: TableService) { }
  faEdit = faEdit;
  faTimes = faTimes;

  readData:any;
  id:any;

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.readData = res.Data;
    })
  }

  newBookForm = new FormGroup({
    'Title': new FormControl('', Validators.required),
    'Author': new FormControl('', Validators.required),
    'Issue': new FormControl('', Validators.required), 
    'Date': new FormControl('', Validators.required), 
    'State': new FormControl('', Validators.required) 
  });


  updateBook() {
    this.service.update(this.readData.id, this.newBookForm.value).subscribe((res) => {
      this.readData = res.Data;
      this.show = false;
    })
  }

  deleteBook() {
    this.service.delete(this.readData.id).subscribe((res) => {
      this.readData = res.Data;
    })
  }

}
