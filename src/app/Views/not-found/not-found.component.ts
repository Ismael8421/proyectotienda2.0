import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  imports: [IonicModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  id: number = 0;

  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);

  constructor() {
    this.Aroute.params.subscribe(params => {
      this.id = Number(params['id']);
    });
  }

  goToHome(): void{
    this.route.navigate(['']);
  }
}
