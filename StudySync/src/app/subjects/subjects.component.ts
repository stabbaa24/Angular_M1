import { Component, ViewChild } from '@angular/core';
import { SubjectsService } from '../shared/subjects.service';
import { Subject } from './subject.model';
import { MatDialog } from '@angular/material/dialog';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  titre = "Liste des Matières";
  subjects!: Subject[];
  getUploadedImage = "../../../";
 
  constructor(
    private subjectsService: SubjectsService,
    private dialog: MatDialog,
    public authService: AuthService
    ) { }

  
  ngOnInit(): void {
    this.loadPageData();
  }

  loadPageData(): void {
    this.subjectsService.getSubjects().
      subscribe(data => {
        this.subjects = data.docs;
        console.log(this.subjects);
        
      }
      );
  }

  openAddSubjectDialog(): void {
    const dialogRef = this.dialog.open(AddSubjectComponent, {
      width: '400px'
      //,      data: { subjectId: subject.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fenêtre modale fermée');
      this.loadPageData();
    });
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}