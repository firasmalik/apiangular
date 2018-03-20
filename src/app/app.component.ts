import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '';
  age:'';
  found:boolean;

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }
  getProfile(){
    //console.log(this.name);
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
  // this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=${this.name}')
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
           this.found = true;
           }
        }
      )
    }
    }










/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '';

  found:boolean;

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
  //console.log(event.target.value);
  this.location = event.target.value;
  this.found = false;
  }
  getProfile(){
    console.log(this.location);
      this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=${this.location}')
  .subscribe(
    console.log("good");

    }
  );
}
/*

// var x=['results'][0];
// console.log(data);
// alert('hello')
}
//  else{
 //alert('hello');
//}(data:any)=>{
    console.log(JSON.stringify(data));*/
