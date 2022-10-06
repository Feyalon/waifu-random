import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nfswaifu';
  nsfw = "sfw";
  text = "Off";
  sfw = "On";
  fs = true;
  
  response: any;

  constructor(private http: HttpClient) { }
  search (){
    this.http.get('https://api.waifu.pics/' + this.nsfw + "/waifu")
    .subscribe((response)=>{
      this.response = response;
      console.log(response)
      
    })
    
  }
  nfw(){
    this.nsfw = "nsfw";
    this.text = "On";
    this.sfw = "Off";
    this.fs = false;
  }
  sfws(){
    this.nsfw = "sfw";
    this.text = "Off";
    this.sfw = "On";
    this.fs = true;
  }
  
}
