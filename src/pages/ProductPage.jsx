import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../api/productsApi';

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(undefined);
  const [error, setError] = useState('');

  useEffect(() => {
    setProduct(undefined);
    setError('');
    getProductById(productId).then((result) => result ? setProduct(result) : setError('Товар не найден')).catch(() => setError('Ошибка загрузки товара'));
  }, [productId]);

  if (error) return <main className="section"><div className="container message"><h1>{error}</h1><Link to="/catalog">Вернуться в каталог</Link></div></main>;
  if (!product) return <main className="section"><div className="container"><p>Загрузка товара...</p></div></main>;

  return <main className="section"><div className="container"><Link to="/catalog">← Назад в каталог</Link><div className="product-detail"><img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.title}/><div><h1>{product.title}</h1><p>{product.description}</p><p>Категория: {product.category}</p><p>Рейтинг: {product.rating}</p><p>Цена: {product.price.toLocaleString('ru-RU')} руб.</p><p>{product.isAvailable ? 'В наличии' : 'Нет в наличии'}</p><Link className="button" to={`/order?product=${product.id}`}>Оставить заявку</Link></div></div></div></main>;
}

