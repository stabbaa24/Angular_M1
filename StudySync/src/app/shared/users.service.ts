import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    constructor(private loggingService: LoggingService,
        private http: HttpClient) { }

    url = `${environment.apiURL}/users`;
    registerUser(users: { login: string, password: string, role: string }): Observable<any> {
        return this.http.post<any>(this.url + '/register', users);
    }

    logInUser(users: { login: string, password: string }): Observable<any> {
        return this.http.post<any>(this.url + '/login', users);
    }

    getRole(users: { login: string, password: string }): Observable<any> {
        return this.http.post<any>(this.url + '/role', users);
    }
}