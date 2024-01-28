import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/shared/students.service';
import { TeachersService } from 'src/app/shared/teachers.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    role: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    promo: new FormControl('', Validators.required),
    groupe: new FormControl('', Validators.required)
  });

  isRegisterFailed = false;
  getErrorRegister = 'Nom d\'utilisateur ou mot de passe incorrect.';
  file: File | null = null;
  files: File[] = [];
  imgFolder = 'assets/uploads/';

  constructor(
    private authService: AuthService,
    private router: Router,
    private studentService: StudentsService,
    private teacherService: TeachersService
  ) { }

  ngOnInit(): void {
    console.log(this.registerForm);
    this.registerForm.get('role')?.valueChanges.subscribe((value) => {
      if (value === 'user') {
        this.getPromo?.setValidators([Validators.required]);
        this.getGroupe?.setValidators([Validators.required]);
      } else {
        this.getPromo?.clearValidators();
        this.getGroupe?.clearValidators();
      }
      this.getPromo?.updateValueAndValidity();
      this.getGroupe?.updateValueAndValidity();
    });
  }

  onRegister() {
    if (!this.registerForm.valid) {
      this.isRegisterFailed = true;
      this.getErrorRegister = 'Formulaire non valide.';
      return;
    }

    const role = this.registerForm.value.role ?? 'user';
    const username = this.getLastName?.value + '.' + this.getFirstName?.value;
    const password = this.getPassword?.value ?? '';
    const confirmPassword = this.getConfirmPassword?.value ?? '';

    if (password !== confirmPassword) {
      this.isRegisterFailed = true;
      this.getErrorRegister = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.authService.register(username, password, role).subscribe({
      next: (getUser) => {
        const data = {
          nom: this.getLastName?.value,
          prenom: this.getFirstName?.value,
          image: '', // Chaîne vide pour l'image
          promo: role === 'user' ? this.getPromo?.value : null,
          groupe: role === 'user' ? this.getGroupe?.value : null,
          idUser: getUser.id
        };

        const registerObservable = role === 'user' ? this.studentService.addStudent(data) : this.teacherService.addTeacher(data);

        registerObservable.subscribe({
          next: () => this.router.navigate(['/loggin']),
          error: (error) => {
            console.error('Erreur lors de l\'inscription : ', error);
            this.isRegisterFailed = true;
            this.getErrorRegister = 'Erreur lors de l\'inscription.';
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription utilisateur : ', error);
        this.isRegisterFailed = true;
      }
    });
  }

  get getPassword() { return this.registerForm.get('password'); }
  get getConfirmPassword() { return this.registerForm.get('confirmPassword'); }
  get getLastName() { return this.registerForm.get('lastname'); }
  get getFirstName() { return this.registerForm.get('firstname'); }
  get getImage() { return this.registerForm.get('image'); }
  get getPromo() { return this.registerForm.get('promo'); }
  get getGroupe() { return this.registerForm.get('groupe'); }
}
