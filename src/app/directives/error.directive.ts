import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appError]',
  providers: [
    {provide: NG_VALIDATORS,
    useExisting: ErrorDirective,
    multi: true}]
})
export class ErrorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
 const value = control.value as string
 if(value.includes('test')){
  return{
    invalidEmail:true
  }
 }
 return null
  }
}


