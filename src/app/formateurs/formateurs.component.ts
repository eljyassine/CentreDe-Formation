import { Component, OnInit } from '@angular/core';
import { formateurlist } from './formateurs'; 
@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  ajoutertrue=false;
  modiftrue=false;
  formateur ; 
  formateurs = formateurlist;
  constructor() { }

  ngOnInit(): void {


  }

 
 add(formateur){
  formateur.id = formateurlist.length + 1;
  formateurlist.push(formateur);
  this.ajoutertrue= !this.ajoutertrue;
  }
  btnadd(){
    this.ajoutertrue= !this.ajoutertrue;
    console.log(this.ajoutertrue);
console.log();
  }
  delete(id:number){   
    this.formateurs.splice(this.formateurs.indexOf(this.formateurs.find(formateur => formateur.id == id)), 1);
    }
  

   
  actualiser(){

  }
  edit( ){
    this.modiftrue= !this.modiftrue;
    console.log ( this.formateur )   
  }
  bntedit(id:number){
    this.modiftrue= !this.modiftrue;
   this.formateur= this.formateurs[id - 1];
      }

  }


    
  /*
      delete(sessionItem) {
        let index;
        index = SESSIONITEMS.indexOf(sessionItem);
        if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
        SESSIONITEMS.splice(index, 1);
        }
        }
  
        getSession(id: number) {
          return SESSIONITEMS[id - 1];
          }*/


