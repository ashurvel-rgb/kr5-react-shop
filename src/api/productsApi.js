export async function getProducts() {
  const response = await fetch(`${import.meta.env.BASE_URL}products.json`);
  if (!response.ok) throw new Error("Не удалось загрузить товары");
  return response.json();
}

export async function getProductById(productId) {
  const products = await getProducts();
  return products.find((product) => product.id === Number(productId)) ?? null;
}
