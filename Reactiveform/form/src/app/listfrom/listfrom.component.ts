import { Component , Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { FormService } from '../forms.service';
import { SortEvent } from 'primeng/api';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listfrom',
  templateUrl: './listfrom.component.html',
  styleUrls: ['./listfrom.component.css']
})
export class ListfromComponent {
  @Input() value: any; 
  [x: string]: any;
  forms : any = [];
  id:any = null;
  @ViewChild('dt1')
  dt1!: Table;

  private formsSub : Subscription = new Subscription;

  constructor ( public formsService: FormService , private formBuilder: FormBuilder) {  }


  ngOnInit() {
    this.formsService.getForms().subscribe(
      (data) => {
        if (data.status === true && Array.isArray(data.data)) {
          this.forms = data.data;
        } else {
          console.error('Invalid data:', data);          
        }
      },
      (error) => {
        console.error('Error fetching forms:', error);
       
      }
    );
  }

  clear(table: Table) {  
    table.clear();
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
      this.forms = res.data; 
    })
  }

  onEdit (forms:any) {
    this.id = forms;
    this.profileform.setValue(forms);  
  }

  onDelete(formId: any) {
    this.formsService.deleteFrom(formId).subscribe(
      () => {
        this.getForms();
      },
      (error) => {
        console.error('Error deleting form:', error);
      }
    );
  }



}
