import { Controller, Get } from '@nestjs/common';
import { PublicCatalogService } from './public-catalog.service';

@Controller('public')
export class PublicCatalogController {
  constructor(private readonly publicCatalogService: PublicCatalogService) {}

  @Get('products/get_product')
  getProducts() {
    return this.publicCatalogService.getProducts();
  }

  @Get('categories/get_category')
  getCategories() {
    return this.publicCatalogService.getCategories();
  }
}
