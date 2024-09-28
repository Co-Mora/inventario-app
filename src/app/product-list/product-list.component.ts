import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (products) => (this.products = products),
      (error) => console.error('Error loading products', error)
    );
  }

  addProduct() {
    // Implement add product logic
  }

  editProduct(product: Product) {
    // Implement edit product logic
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      () => this.loadProducts(),
      (error) => console.error('Error deleting product', error)
    );
  }
}
