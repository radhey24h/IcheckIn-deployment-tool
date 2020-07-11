import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root',
})
export class ScheduleService {
    url: string = environment.serverUrl;
    constructor(private http: HttpClient) {
    }
    getAllSchdule() {
        return this.http.get<any>(this.url + 'getAllSchedule');
    }

}

