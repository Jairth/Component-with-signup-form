import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { gsap } from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public registerForm!: FormGroup;
  public showErrors: boolean = false;
  public showClaim:boolean = false;
  public showForm:boolean = true;

  // @ViewChild('title') title!:ElementRef<HTMLDivElement>;

  constructor(private formBuilder: FormBuilder) {}


  // ngAfterContentInit(): void {
  //   gsap.fromTo(this.title,{y:'-100%',opacity:0},{y:0,opacity:1})
  // }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get firstNameControl() {
    return this.registerForm.get('firstName');
  }
  get lastNameControl() {
    return this.registerForm.get('lasttName');
  }
  get emailControl() {
    return this.registerForm.get('email');
  }
  get passwordControl() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    this.showErrors = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.registerForm.reset();
      this.showErrors = false;
      this.showForm = false;
      this.showClaim = true
    }
  }
}
