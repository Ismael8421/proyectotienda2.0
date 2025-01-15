import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product.mode';
import { CartService } from '../../Services/cart.service';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-store-detail',
  imports: [IonicModule],
  templateUrl: './store-detail.component.html',
  styleUrl: './store-detail.component.css'
})
export class StoreDetailComponent {
  productSelected!: Product;
  quantity: number = 1; // Cantidad inicial
  totalPrice: number = 0;

  private route = inject(Router);
  private Aroute = inject(ActivatedRoute);
  private ProductServ = inject(ProductService);

  constructor(private cartService: CartService) {
    this.Aroute.params.subscribe(params => {
      const id = params['id'];
      const product = this.ProductServ.getProductsById(Number(id));

      if (!product) {
        console.log('Product not found');
        this.route.navigate(['not-found', id]);
      } else {
        this.productSelected = product;
        this.totalPrice = this.productSelected.price; // Precio inicial
      }
    });
  }

  goToHome(): void {
    this.route.navigate(['']);
  }

  // Método para actualizar cantidad y precios
  updateQuantity(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const quantityValue = Number(inputElement.value);

    this.quantity = quantityValue > 0 ? quantityValue : 1;
    this.totalPrice = this.quantity * this.productSelected.price;
  }
  addToCart(): void {
    this.cartService.addToCart(this.productSelected);
  }
}
