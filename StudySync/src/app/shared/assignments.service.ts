import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { bdInitialAssignments } from './data';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})

export class AssignmentsService {
  getSubjects() {
    throw new Error('Method not implemented.');
  }

  constructor(private loggingService: LoggingService,
    private http: HttpClient) { }

  url = `${environment.apiURL}/assignments`;

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url); // renvoie un Observable
  }


  getAssignment(id: number): Observable<Assignment | undefined> {
    // Assurez-vous que l'URL est correctement formée et que 'id' n'est pas undefined
    const url = `${this.url}/${id}`;
    console.log('Appel API avec URL:', url);
    return this.http.get<Assignment>(url);
  }


  addAssignment(assignment: Assignment): Observable<any> {
    return this.http.post<Assignment>(this.url, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<any> {
    return this.http.put<Assignment>(this.url, assignment);
  }

  deleteAssignment(assignment: Assignment): Observable<any> {
    const deleteURI = this.url + "/" + assignment._id; // Assurez-vous que _id est correct
    return this.http.delete(deleteURI);
  }


peuplerBD() {
  bdInitialAssignments.forEach(a => {
    let nouvelAssignment = new Assignment();
    nouvelAssignment.id = a.id;
    nouvelAssignment.nom = a.nom;
    nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
    nouvelAssignment.rendu = a.rendu;
    nouvelAssignment.auteur = a.auteur; 
    nouvelAssignment.matiere = a.matiere; 

    if (['TD 1', 'TD 2', 'TD 3'].includes(a.groupe)) {
      nouvelAssignment.groupe = a.groupe as 'TD 1' | 'TD 2' | 'TD 3';
    } else {
      throw new Error(`Valeur invalide pour groupe: ${a.groupe}`);
    }

    if (['L3', 'M1', 'M2'].includes(a.promo)) {
      nouvelAssignment.promo = a.promo as 'L3' | 'M1' | 'M2';
    } else {
      throw new Error(`Valeur invalide pour promo: ${a.promo}`);
    }

    this.addAssignment(nouvelAssignment)
      .subscribe(reponse => {
        console.log(reponse.message);
      });
  });
}

  getAssignmentsPagine(page: number, limit: number): Observable<any> {
    return this.http.get<any>(this.url + "?page=" + page + "&limit=" + limit);
  }

}
