import { Product } from './product';

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(product: Product) {
        if (product) {
            this.id = product.id || ''; // Assign empty string if id is undefined
            this.name = product.name || ''; // Assign empty string if name is undefined
            this.imageUrl = product.imageUrl || ''; // Assign empty string if imageUrl is undefined
            this.unitPrice = product.unitPrice || 0; // Assign 0 if unitPrice is undefined

            this.quantity = 1;
        } else {
            // Handle case where product is undefined
            // For example, throw an error or set default values
            throw new Error('Product is undefined.');
        }
    }
}
