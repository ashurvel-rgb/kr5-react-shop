import ProductCard from './ProductCard';
export default function ProductList({ products, onAdd, favorites, onFavorite }) { if (!products.length) return <div className="empty">По вашему запросу ничего не найдено.</div>; return <div className="grid">{products.map((product)=><ProductCard key={product.id} product={product} onAdd={onAdd} favorite={favorites.includes(product.id)} onFavorite={onFavorite}/>)}</div>; }

