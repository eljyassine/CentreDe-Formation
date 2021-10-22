import { Component, OnInit } from '@angular/core';
import { participantlist } from './participants'; 
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  ajoutertrue=false;
  modiftrue=false;
  participant ; 
  participants = participantlist;
  constructor() { }

  ngOnInit(): void {


  }

 
 add(participant){
  participant.id = participantlist.length + 1;
  participantlist.push(participant);
  this.ajoutertrue= !this.ajoutertrue;
  }
  btnadd(){
    this.ajoutertrue= !this.ajoutertrue;
    console.log(this.ajoutertrue);
console.log();
  }
  delete(id:number){   
    this.participants.splice(this.participants.indexOf(this.participants.find(participant => participant.id == id)), 1);
    }
  

   
  actualiser(){

  }
  edit( ){
    this.modiftrue= !this.modiftrue;
    console.log ( this.participant )   
  }
  bntedit(id:number){
    this.modiftrue= !this.modiftrue;
   this.participant= this.participants[id - 1];
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


