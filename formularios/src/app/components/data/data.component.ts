import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {

  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: 'Pedro',
      apellido: 'Flores'
    },
    email: 'test@gail.com',
    password1: '',
    password2: '',
    username: ''
  };

  constructor() {


    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, Validators.minLength(3), this.noHerrera]),
      }),
      'email': new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl(''),
      'username': new FormControl('', Validators.required, [this.existUser])
    });
    // this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIguak.bind(this.forma)
    ]);

    this.forma.controls['username'].valueChanges
      .subscribe((data) => {
        console.log(data);
      });
  }

  guardarCambios() {
    console.log(this.forma.value);
    this.forma.reset(this.usuario);
  }

  noHerrera(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'herrera') {
      return {
        noherrera: true
      };
    }

    return null;
  }

  noIguak(control: FormControl): { [s: string]: boolean } {
    let forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    }

    return null;
  }

  existUser(control: FormControl): Promise<any>|Observable<any> {

    let promisa = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          if (control.value === 'strider') {
            resolve({existe: true});
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );

    return promisa;
  }


}
