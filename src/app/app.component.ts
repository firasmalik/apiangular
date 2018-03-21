import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location:string = '';
  digs:'number';
  digsii:'number';
  found:boolean;

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.location = event.target.value;
    this.found = false;
  }
  getProfile(){
      this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=${this.location}')
      .subscribe(
                 (data:any[]) => {

                  console.log(data);
                   this.digs=data.results[0]['geometry']['location']['lat'];
                   this.digsii=data.results[0]['geometry']['location']['lng'];

                   this.found = true;
                         }
                     }
                 )
             }
           }
