import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

@Injectable({
    providedIn: 'root'
})

export class RenderedService {
    constructor(private loggingService: LoggingService,
        private http: HttpClient) { }

    url = `${environment.apiURL}/rendered`;

    getRendered(assignmentId: string, studentLogin: string): Observable<any> {
        return this.http.get<any>(`${this.url}/${assignmentId}/${studentLogin}`);
    }

    getRendersForTeacher(assignmentId: string): Observable<any> {
        return this.http.get<any>(`${this.url}/${assignmentId}`);
    }

    addRendered(rendered: any): Observable<any> {
        return this.http.post<any>(this.url, rendered);
    }
}