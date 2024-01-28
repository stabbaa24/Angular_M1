import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectsService } from '../../shared/subjects.service';
import { TeachersService } from '../../shared/teachers.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})

export class AddSubjectComponent {
  subjectForm = new FormGroup({
    matiere: new FormControl('', Validators.required),
    professeur: new FormControl('', Validators.required)
  });

 // file: File | null = null;
  teachers: any[] = [];
  imgFolder = 'assets/uploads/';

  constructor(
    private dialogRef: MatDialogRef<AddSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private subjectService: SubjectsService,
    private teacherService: TeachersService
  ) { }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe({
      next: (teachers) => this.teachers = teachers,
      error: (err) => console.error("Erreur lors de la récupération des professeurs", err)
    });
  }

  onAddSubject() {
    if (!this.subjectForm.valid) {
      console.log('Formulaire non valide');
      return;
    }

    const data = {
      matiere: this.getMatiere?.value,
      image_matiere: '',
      professeur: this.getProfesseur?.value
    };

    this.subjectService.addSubject(data).subscribe({
      next: () => this.router.navigate(['/subjects']),
      error: (error) => console.error('Matière add KO : ', error)
    });


    this.dialogRef.close();
  }

  get getMatiere() { return this.subjectForm.get('matiere'); }
  get getProfesseur() { return this.subjectForm.get('professeur'); }
  get getImage() { return this.subjectForm.get('image'); }
}
