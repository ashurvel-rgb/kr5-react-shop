export function filterProducts(products, query, category, sort) {
  const normalized = query.trim().toLowerCase();
  const result = products.filter((item) => item.title.toLowerCase().includes(normalized) && (!category || item.category === category));
  return [...result].sort((a,b) => sort === 'price-asc' ? a.price-b.price : sort === 'price-desc' ? b.price-a.price : sort === 'name' ? a.title.localeCompare(b.title,'ru') : b.rating-a.rating);
}
export const formatPrice = (value) => `${value.toLocaleString('ru-RU')} ₽`;

