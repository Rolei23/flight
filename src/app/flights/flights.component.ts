import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
roundtrip;
oneway;
multycity;
Flyingfrom;
flyingto;
Departing;
Returning;
constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // {order: "popular"}

      this.roundtrip = params.roundtrip;
      console.log(this.roundtrip); // popular

      this.oneway = params.oneway;
      console.log(this.oneway); // popular

      this.multycity = params.multycity;
      console.log(this.multycity); // popular

      this.Flyingfrom = params.Flyingfrom;
      console.log(this.Flyingfrom); // popular

      this.flyingto = params.flyingto;
      console.log(this.flyingto); // popular

      this.Departing = params.Departing;
      console.log(this.Departing); // popular

      this.Returning = params.Returning;
      console.log(this.Returning); // popular

     

  })}
  ;

 


  }
