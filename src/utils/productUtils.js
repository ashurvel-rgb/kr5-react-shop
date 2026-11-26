export function prepareProducts(products, search, category, sort) {
  let result = products.filter((product) => product.title.toLowerCase().includes(search.trim().toLowerCase()) && (category === 'all' || product.category === category));
  if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
  if (sort === 'title') result = [...result].sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  return result;
}

