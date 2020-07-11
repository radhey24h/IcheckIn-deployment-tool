import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { Cluster } from '@app/shared/models/cluster.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class ClusterService {

  url:string = environment.serverUrl ;

  headers: Headers;
  
  constructor(private http:HttpClient) {

  }

  getAllMachines() {
     return this.http.get<any>(this.url+'getAllMachines') ;
  }

  saveCluster(cluster:Cluster) :any{
    return this.http.post<any>(this.url+'saveMachine', cluster,httpOptions) ;
  }

  deleteCluster(clusterId:number) :any{
    return this.http.post<any>(this.url+'deleteMachine', clusterId,httpOptions) ;
  }


}

