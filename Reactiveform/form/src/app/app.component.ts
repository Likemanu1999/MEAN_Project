import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  Storedfroms:any = [];
  
  onPostAdded(form:any){
    this.Storedfroms.push(form);
  }

}
