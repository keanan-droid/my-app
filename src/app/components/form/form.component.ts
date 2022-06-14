import { TableService } from './../../services/table.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service: TableService, private router:Router) { }

  errormsg:any;

  ngOnInit(): void {
  }

  bookForm = new FormGroup({
    'Title': new FormControl('', Validators.required),
    'Author': new FormControl('', Validators.required),
    'Issue': new FormControl('', Validators.required), 
    'Date': new FormControl('', Validators.required), 
    'State': new FormControl('', Validators.required) 
  });

  bookSubmit() {
    if (this.bookForm.valid) {
      this.service.create(this.bookForm.value).subscribe((res) => {
        this.bookForm.reset();
        this.router.navigate(['']);
      })
    } else {
      this.errormsg = "All fields are required";
    }
  };
}
