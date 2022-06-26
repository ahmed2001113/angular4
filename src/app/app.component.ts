import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project4';

  show = false ;
  i1=""
  i2=""
  a(){
    if(this.i1=="amit" && this.i2=="12345" ){
      this.show = true ;
    }
  }
  
  

}
