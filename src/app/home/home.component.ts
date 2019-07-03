import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  roundtrip=""
  oneway=""
  multycity=""
  Flyingfrom=""
  flyingto=""
  Departing=""
  Returning=""

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onCLICK() {
console.log(this.roundtrip)  
console.log(this.oneway)
console.log(this.multycity)
console.log(this.Flyingfrom)
console.log(this.flyingto)
console.log(this.Departing)
console.log(this.Returning)



this.router.navigate(['/flight'], { queryParams: { roundtrip:this.roundtrip,
  oneway:this.oneway,multycity:this.multycity,
  Flyingfrom:this.Flyingfrom,
  flyingto:this.flyingto,
  Departing:this.Departing,
  returning:this.Returning} });

}

// onCLICK() {this this.router.navigateByUrl(['f'])   }
}