import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  dob:Date = new Date();
  bankTypes: SelectItem[];
  pensionCategories: SelectItem[];
  selectedBankType: string = '';
  selectedPensionCategory: string = '';
  aadharNumber: string = '';
  password: string = '';
  fullName: string = '';
  panNumber: string = '';
  salaryEarned: string = '';
  allowances: string = '';
  bankName: string = '';
  accountNumber: string = '';
  registerResp:any;


  constructor(private registerService: RegisterService){
    this.bankTypes = [
      { label: 'Public', value: 'public' },
      { label: 'Private', value: 'private' }
    ];

    this.pensionCategories = [
      { label: 'Self', value: 'self' },
      { label: 'Family', value: 'family' }
    ];
  }
  ngOnInit(): void {
    
  }

  getSelectedBankType(event: any) {
    console.log(event.value);
    console.log(this.selectedBankType);
  }

  register() {
    console.log(this.aadharNumber);
    const newUser = {
      aadharNumber: this.aadharNumber,
      password: this.password,
      name: this.fullName,
      dob: this.dob.toDateString(),
      pan: this.panNumber,
      salaryEarned: this.salaryEarned,
      allowances: this.allowances,
      pensionCategory: this.selectedPensionCategory,
      bankDetails: {
        bankName: this.bankName,
        accountNumber: this.accountNumber,
        bankType: this.selectedBankType
      }
    };
    this.registerService.saveUser(newUser).subscribe(data => {
      console.log(data);
    } );
  }

}
