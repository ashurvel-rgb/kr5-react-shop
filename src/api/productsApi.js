const base = import.meta.env.BASE_URL;
async function requestProducts() {
  const response = await fetch(`${base}products.json`);
  if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
  return response.json();
}
export async function getProducts() { return requestProducts(); }
export async function getProductById(productId) { const products = await requestProducts(); return products.find((item) => item.id === Number(productId)) ?? null; }

