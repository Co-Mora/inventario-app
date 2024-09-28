import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { ProductListComponent } from './app/product-list/product-list.component';

const bootstrap = () => bootstrapApplication(ProductListComponent, config);

export default bootstrap;
