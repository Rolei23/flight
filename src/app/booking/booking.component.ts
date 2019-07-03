import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  Flyingfrom=""
  flyingto=""
  Departing=""
  Returning=""
  age=""
  travel=""
firstname=""
email=""
address=""
city=""
state=""
zip=""
cname=""
ccnum=""
expmonth=""
expyear=""
cvv=""

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onCLICK(){
    console.log(this.Flyingfrom)
console.log(this.flyingto)
console.log(this.Departing)
console.log(this.Returning)
console.log(this.age)
console.log(this.travel)
    console.log(this.firstname)
    console.log(this.email)
    console.log(this.address)
    console.log(this.city)
    console.log(this.state)
    console.log(this.zip)
    console.log(this.cname)
    console.log(this.ccnum)
    console.log(this.expmonth)
    console.log(this.expyear)
    console.log(this.cvv)
    
    // this.router.navigateByUrl("check-in")
    this.route.navigate(['/check-in'], { queryParams: { 
      Flyingfrom:this.Flyingfrom,
      flyingto:this.flyingto,
      Departing:this.Departing,
      Returning:this.Returning,
      age:this.age,travel:this.travel,
      firstname:this.firstname,
      email:this.email,address:this.address, 
      city:this.city, state:this.state, zip:this.zip,
      cname:this.cname,ccnum:this.ccnum,
      exp:this.expmonth,expyear:this.expyear,cvv:this.cvv} });
}
}
