import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductListComponent } from './app/product-list/product-list.component';

bootstrapApplication(ProductListComponent, appConfig).catch((err) =>
  console.error(err)
);
