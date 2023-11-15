import {Component, OnInit} from '@angular/core';
import {InsuranceClientsService} from "../services/insurance-clients.service";
import {delay} from "rxjs";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {

  clients: any[];
  isLoading: boolean;


  constructor(private clientsService: InsuranceClientsService) {
    this.clients = [];
    this.isLoading = true;

  }


  ngOnInit(): void {
    this.isLoading = true;
    delay(5000);
    this.clientsService.getClientsList().subscribe({
      next: (res) => {
        this.clients = res.data
      },
      error: (err) => {
        console.log(err.message)
      },
      complete:()=>{
       console.log("done")}
    })
    this.isLoading = false;
  }


}
