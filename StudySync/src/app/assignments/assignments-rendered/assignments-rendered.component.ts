import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments-rendered',
  templateUrl: './assignments-rendered.component.html',
  styleUrls: ['./assignments-rendered.component.css']
})
export class AssignmentsRenderedComponent {
  errorImg = "../../assets/img/logo.png";
  retry() {
    window.location.reload();
  }
}
