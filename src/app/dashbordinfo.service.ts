import { SelectorContext } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SESSIONITEMS } from './admin/sessions';
import { formateurlist } from './formateurs/formateurs';
import { participantlist } from './participants/participants';


@Injectable({
  providedIn: 'root'
})
export class DashbordinfoService {
  nbrformateur : any ;
  nbrparticipant : any ;
  nbrsession :any ;
  counts:any;
  finalArray :any;
  constructor() {  }
   nbrformateurs () {
    this.nbrformateur = formateurlist.length;
    return this.nbrformateur; } 

    nbrparticipants () {
      this.nbrparticipant = participantlist.length;
      return this.nbrparticipant; } 


    nbrsessions () {
    this.nbrsession = SESSIONITEMS.length;
    return this.nbrsession; } 
 tablefiltrer (){
  
  this.counts = SESSIONITEMS.reduce(function (m, c) {
    if (c.track in m)
        m[c.track].count += 1;
    else
        m[c.track] = { sector: c.track, count: 1 };
    return m;
}, {});
  this.finalArray = Object.values(this.counts).sort((a,b) => b[1]-a[1] );
  return this.finalArray
 }

}
