import { Component, inject, Input} from '@angular/core';
import { Product } from '../../Models/product.mode';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  route = inject(Router);
  @Input() item!:Product;

  navigateToID() {
    this.route.navigate(['products', this.item.id]);
  }
}
