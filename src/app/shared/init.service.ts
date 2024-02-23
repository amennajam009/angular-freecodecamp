import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
//APP-INITILAZERa means it will loads the file or the data before application starts so we can inject out function in 
//out application before it starts 
  constructor(private http:HttpClient) { }
//  config:any
//   init(){
//     return this.http.get('/assets/config.json').pipe(tap((config)=>(this.config = config)))
//   }
init() {
  return () => this.http.get('/index.html').toPromise()
    .then(config => {
      // Handle the configuration data here if needed
      console.log('Configuration loaded:', config);
    });
}
}
