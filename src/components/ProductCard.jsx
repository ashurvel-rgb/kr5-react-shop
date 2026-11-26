import { Link } from 'react-router-dom';
export default function ProductCard({ product }) { return <article className="product-card"><img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.title}/><h2>{product.title}</h2><p>{product.price.toLocaleString('ru-RU')} руб.</p><p>{product.isAvailable ? 'В наличии' : 'Нет в наличии'}</p><Link className="button" to={`/catalog/${product.id}`}>Подробнее</Link></article>; }

