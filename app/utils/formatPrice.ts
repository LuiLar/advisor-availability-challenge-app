export function formatPrice(rawPrice: number): string {
  return `$${rawPrice.toFixed(2)}`;
}