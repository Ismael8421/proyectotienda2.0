import { Component, inject } from '@angular/core';
import { Product } from '../../Models/product.mode';
import { ProductItemComponent } from '../../Components/product-item/product-item.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../Services/product.service';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-store-home',
  imports: [NgFor, ProductItemComponent, RouterLink, IonicModule ],
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.css']
})
export class StoreHomeComponent {
  
  productService = inject(ProductService);
  listaProductos: Product[] = this.productService.getProducts();
  
  // Paginación
  currentPage: number = 1;
  productsPerPage: number = 6; // Número de productos por página
  totalPages: number = Math.ceil(this.listaProductos.length / this.productsPerPage);
  currentProducts: Product[] = this.listaProductos.slice(0, this.productsPerPage);

  // Método para cambiar de página
  changePage(direction: string): void {
    if (direction === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    } else if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    }
    this.updateCurrentProducts();
  }

  // Actualizar los productos mostrados en la página actual
  updateCurrentProducts(): void {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.currentProducts = this.listaProductos.slice(startIndex, endIndex);
  }
}
