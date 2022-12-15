import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  aadharNumber: string = '';
  password: string = '';

  constructor(private registerService: RegisterService, private router: Router) {

   }

  ngOnInit(): void {
  }

  login() {
    const user = {
      aadharNumber: this.aadharNumber,
      password: this.password
    };

    this.registerService.login(user).subscribe( resp => {
      console.log(resp.token);
      localStorage.setItem("token", resp.token);
      localStorage.setItem("aadharNumber", this.aadharNumber);
      this.router.navigate(['/showpension']);
    }, err =>{
      this.router.navigate(['/showpension']);
    });
  }

}
