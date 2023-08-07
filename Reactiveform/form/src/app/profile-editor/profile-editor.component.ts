import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
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
	showSubjects = false;
	subjects: string[] = ['Maths', 'Science', 'History', 'English', 'Computer'];
	subjectMarks: { [subject: string]: number } = {};
	average!: number;

	calculateAverage() {
		const totalMarks = Object.values(this.subjectMarks).reduce((sum, mark) => sum + mark, 0);
		this.average = totalMarks / this.subjects.length;
	}

	onFileChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files.length) {
			const file = inputElement.files[0];
			this.profileform.patchValue({ picture: file });
			const reader = new FileReader();
			reader.readAsDataURL(file);
		}
	}

	showSubjectInputs() {
		this.showSubjects = true;
	}



	@Output() formCreated = new EventEmitter();
	constructor(public formService: FormService, public route: ActivatedRoute, private fb: FormBuilder) { }

	ngOnInit() {
		// this.profileform = new FormGroup({
		this.profileform = this.fb.group({
			firstname: new FormControl(''),
			lastname: new FormControl(''),
			street: new FormControl(''),
			city: new FormControl(''),
			email: ['', [Validators.required, Validators.email]],
			mobile: ['', [Validators.required]],
			picture: new FormControl(''),
			average: new FormControl(''),
		});
	}

	onSubmit() {
		console.log("This is data", this.profileform);
		if (this.mode === 'create') {
			this.formService.addForm(this.formId, this.profileform.value.firstname, this.profileform.value.lastname, this.profileform.value.street, this.profileform.value.city, this.profileform.value.email, this.profileform.value.mobile, this.profileform.value.picture, this.profileform.value.average);
		} else {
			this.formService.updateForm(this.formId, this.profileform.value.firstname, this.profileform.value.lastname, this.profileform.value.street, this.profileform.value.city, this.profileform.value.email, this.profileform.value.mobile, this.profileform.value.picture, this.profileform.value.average);
		}
		this.profileform.reset();
	}
}
