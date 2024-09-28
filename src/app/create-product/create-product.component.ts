import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  product: Product = {
    id: '',
    name: '',
    quantity: 0,
    price: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(): void {
    this.productService.createProduct(this.product).subscribe({
      next: () => {
        alert('Product created successfully!');
        this.router.navigate(['/products']); // Navigate back to the product list after creation
      },
      error: (err) => {
        console.error('Error creating product:', err);
        alert('Failed to create product. Please try again.');
      },
    });
  }
}
