import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testminipro';
  datee=new Date(); 
  lat;
  lng;
 logintrue :boolean ;
  
  adminnom="admin";
  adminpass="admin";
  textt="";
   



  public ngOnInit(): void {
    this.getLocation();
    this.logintrue=!this.logintrue;
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position ) => {
        if (position) {
          
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lat);
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  btnclick(){
    window.location.reload()
    this.logintrue=true;
    
  }
  btnsubmit(formm){
    
 console.log(this.textt);
   if(formm.nom===this.adminnom && formm.prenom===this.adminpass)
    {this.logintrue=false;      

    this.textt=""
  }
    else this.textt="nom =admin & mot de passe =admin "

  }

  
}

