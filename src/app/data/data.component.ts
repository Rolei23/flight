import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
email
psw

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params) // {order: "popular"}

        this.email = params.email
        console.log(this.email) // popular}
  
          this.psw = params.psw
          console.log(this.psw); // popular}

        
      });
  }
}

