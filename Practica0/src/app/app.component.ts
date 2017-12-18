import { Component, Directive,
         Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,
         Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }    from './user';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new User('','',null,'',null,null);
  submitted = false;
}
