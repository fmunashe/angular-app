import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CurrencyServiceService} from "../services/currency-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required]],
  });

  currencies: any[];
  isLoading: boolean;

  constructor(private fb: FormBuilder, private currencyService: CurrencyServiceService) {
    this.currencies = [];
    this.isLoading = true;
  }

  login() {
    console.log(this.loginForm.value);
    //make a call to an external API to login
    this.isLoading = true;
    this.currencyService.getCurrencies().subscribe(
      (response) => {
        this.currencies = response.data;
        console.log(response.data);
        this.isLoading = false;
      },
      (error) => {
        alert(error.message)
      }
    )

    this.loginForm.reset();
  }

  ngOnInit(): void {
    // this.isLoading = true;
    this.currencyService.getCurrencies().subscribe(
      (response) => {
        this.currencies = response.data; // Adjust based on your API response structure
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    this.isLoading = false;
  }
}
