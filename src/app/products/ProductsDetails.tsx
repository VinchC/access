import Link from "next/link";

export default function ProductDetails({ product }: { product: any }) {
  return <Link href={`/products/${product.id}`}>{product.title}</Link>;
}
