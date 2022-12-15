import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-show-pension',
  templateUrl: './show-pension.component.html',
  styleUrls: ['./show-pension.component.css']
})
export class ShowPensionComponent implements OnInit {

  aadharNumber: string = '';
  pensionAmount: string = '';
  bankCharge: string = '';
  aadharValue: any;
  

  constructor(private registerService: RegisterService) {
    this.aadharValue = localStorage.getItem("aadharNumber");
  }

  ngOnInit(): void {
    this.aadharNumber = this.aadharValue.toString();
    this.registerService.getPensionDetails(this.aadharNumber).subscribe( resp => {
      console.log(resp);
      this.pensionAmount = resp.pensionAmount;
      this.bankCharge = resp.bankServiceCharge;
    });

  }

}
