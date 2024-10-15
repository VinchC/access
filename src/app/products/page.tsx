import { products } from "./data";
import ProductDetails from "./ProductsDetails";

export default function ProductsListPage() {
  return (
    <ul>
      {products.map((product: any) => (
        <li key={product.id} >
          <ProductDetails product={product} />
        </li>
      ))}
    </ul>
  );
}
