import { Component , OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { FormService } from '../forms.service';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-listfrom',
  templateUrl: './listfrom.component.html',
  styleUrls: ['./listfrom.component.css']
})
export class ListfromComponent {
  [x: string]: any;
  forms : any = [];
  id:any = null;

  private formsSub : Subscription = new Subscription;

  constructor ( public formsService: FormService) { }

  ngOnInit(){
    this.formsService.getForms().subscribe((data) => {
      this.forms = data;
  });
    // this.getForms();
  }




  customSort(event:SortEvent){
     event.data?.sort((data1:any, data2:any)=>{
        let value1 = data1[event.field!];
        let value2 = data2[event.field!];
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

        return event.order! * result;
      })
  }

  getForms(){
    this.formsService.getForms().subscribe((res)=> {
      this.forms =  res;
    })
  }

  onEdit (form:any) {
    this.id = form.id;

  }

  onDelete(formId : any ){
    this.formsService.deleteFrom(formId);
    this.getForms();
  }

  ngOnDestroy(){
    this.formsSub.unsubscribe();
  }

  testFun(event: any) {
    console.log(event);
    // 

  }

}
