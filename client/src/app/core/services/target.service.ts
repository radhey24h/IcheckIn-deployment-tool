import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { Target } from '@app/shared/models/target.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  

@Injectable({
  providedIn: 'root',
})
export class TargetService {

  url:string = environment.serverUrl ;

  headers: Headers;

  constructor(private http:HttpClient) {

  }

  getTargetByMachineId(machineId:number,type:string) {
  const params = { id: machineId ,
                   type: type };
    return this.http.post<any>(this.url+'getTargetsByMachineIdAndType', params,httpOptions) ;
  }

  saveTarget(target:Target) :any{
    return this.http.post<Target>(this.url+'saveTarget', target,httpOptions) ;
  }

  deleteTarget(targetId:number) :any{
    return this.http.post<number>(this.url+'deleteTarget', targetId,httpOptions) ;
  }

}

