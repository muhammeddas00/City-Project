import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private httpClient:HttpClient,private alertifyService:AlertifyService,
  private router:Router) { }
path="https://localhost:7031/api/";


getCities():Observable<City[]>{
  return this.httpClient.get<City[]>(this.path+"cities");
}


getCityById(cityId:number):Observable<City>{
  
return this.httpClient.get<City>(this.path+"cities/detail/?id="+cityId)
}

getPhotoByCity(cityId:number):Observable<Photo[]>{
  return this.httpClient.get<Photo[]>(this.path+"cities/photos/?cityId"+cityId)

}

add(city: City) {
  this.httpClient.post<City>(this.path + "cities/add", city).subscribe(data =>{
    this.alertifyService.success("şehir başarıyla eklendi")
    this.router.navigateByUrl('/cityDetail/'+data.id)
  });
    
  }
}


