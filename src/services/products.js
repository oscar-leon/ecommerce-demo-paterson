import { URI_PRODUCTS } from '../config/constants';
import fetcher from './helpers';

async function getProducts() {
    const products = await fetcher(URI_PRODUCTS);

    return products;
}

export default getProducts;