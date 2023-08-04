import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../forms.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

	[x: string]: any;
	public mode = 'create';
	public formId: any;
	profileform!: FormGroup;
	email: string = '';
    // otp: string = '';
    // isEmailSubmitted: boolean = false;

	subjects: string[] = ['Marathi', 'Hindi', 'Math', 'Science', 'English'];
	subjectMarks: { [key: string]: number } = {};
    average: number = 0;

  calculateAverage() {
  
	const marksArray = Object.values(this.subjectMarks);
    const totalMarks = marksArray.reduce((sum, mark) => sum + mark, 0);
    this.average = totalMarks / marksArray.length;   
  }

//   submitForm() {
//     if (!this.isEmailSubmitted) {      
//       this.otp = '1234';
//       this.isEmailSubmitted = true;
//     } else {     
//       console.log('Entered OTP:', this.otp);
//     }
//   }


	@Output() formCreated = new EventEmitter();
	constructor(public formService: FormService , public route : ActivatedRoute ) { }

	ngOnInit() {
		this.profileform = new FormGroup({
			firstname: new FormControl(''),
			lastname: new FormControl(''),
			street: new FormControl(''),
			city: new FormControl(''),
			email: new FormControl(''),
			mobile: new FormControl(''),
			picture: new FormControl(''),
			average : new FormControl(''),
		});
	}

	onSubmit() {
		console.log(this.profileform);
		if (this.profileform.invalid) {
			return;
		}
		if (this.mode === 'create') {
			this.formService.addForm(this.formId, this.profileform.value.firstname, this.profileform.value.lastname, this.profileform.value.street, this.profileform.value.city, this.profileform.value.email, this.profileform.value.mobile,this.profileform.value.picture, this.profileform.value.average);
		} else {
			this.formService.updateForm(this.formId, this.profileform.value.firstname, this.profileform.value.lastname, this.profileform.value.street, this.profileform.value.city, this.profileform.value.email, this.profileform.value.mobile,this.profileform.value.picture,this.profileform.value.average);
		}
		this.profileform.reset();
	}
}
