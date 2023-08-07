import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from './form.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class FormService {
	[x: string]: any;
	constructor(private http: HttpClient , private router: Router) { }

	getForms(): Observable<any> {
		return this.http.get('http://localhost:3000/getData');
	  }

	addForm(id: any ,firstname: string, lastname: string, street: string, city: string,  email: string, mobile: string,picture:string, average: string) {
		const form = { firstname: firstname, lastname: lastname, street: street, city: city, email: email,mobile: mobile, picture: picture , average: average};
		this.http.post('http://localhost:3000/create', form).subscribe((res: any) => {
			this.getForms();
      this.router.navigate(["/"])
		})
	}

	

	updateForm(id: any ,firstname : string, lastname : string, street : string, city : string, email: string, mobile: string, picture: string,average:string ){
	    const form: Form = { id: id, firstname: firstname, lastname: lastname, street: street, city: city,	email: email, mobile: mobile, picture: picture,average:average};
	    this.http.put('http://localhost:3000/updateUser' +id,form)
	    .subscribe(response =>console.log(response));
      this.router.navigate(["/"])
	}

 	deleteFrom(formId: any) {
		return this.http.delete("http://localhost:3000/deleteUser/" + formId);
	  }
}


