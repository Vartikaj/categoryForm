import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {
  
  contactForm !: FormGroup;
  addressForm : any;

  
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      'streetAddress': [null, [Validators.required, Validators.pattern('[a-zA-Z0-9 .-/]*')]],
      'cityName': [null, [Validators.required]],
      'pincode': [null, [Validators.required]],
      'stateName': [null, [Validators.required]],
    });

    this.contactForm = this.formBuilder.group({
      'firstName' : [null, [Validators.required, Validators.pattern('[a-zA-Z .]*')]],
      'lastName' : [null, [Validators.required, Validators.pattern('[a-zA-Z .]*')]],
      'email': [null, [Validators.required, Validators.email]],
      'phone': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20), Validators.pattern("^[0-9]*$")]],
      'address': this.addressForm
    });
  }
}
