import { Component, OnInit } from '@angular/core';
import { DashbordinfoService } from '../dashbordinfo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
nbrformateur :any ;
nbrparticipant :any ;
nbrsession :any ;
finalArray:any;

  constructor(private servicein: DashbordinfoService) { }

  ngOnInit(): void { this.nbrformateur=this.servicein.nbrformateurs();
    this.nbrparticipant=this.servicein.nbrparticipants();
    this.nbrsession=this.servicein.nbrsessions();
    this.finalArray=this.servicein.tablefiltrer();
    console.log(this.finalArray);
    
  }

}
