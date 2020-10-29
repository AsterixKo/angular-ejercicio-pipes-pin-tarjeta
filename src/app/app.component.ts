import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ejercicio-pipes-pin-tarjeta';
  pin:string = '1234';
  isHide:boolean = false;

  constructor(){}



  hideOrShow(){
    if(this.isHide){
      this.isHide=false;
    }else{
      this.isHide=true;
    }
  }
}
