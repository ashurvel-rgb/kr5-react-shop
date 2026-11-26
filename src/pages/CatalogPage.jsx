import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../api/productsApi';
import CatalogControls from '../components/CatalogControls';
import ProductList from '../components/ProductList';
import { prepareProducts } from '../utils/productUtils';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [requestNumber, setRequestNumber] = useState(0);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('default');

  useEffect(() => {
    setLoading(true);
    setError('');
    getProducts().then(setProducts).catch(() => setError('Ошибка загрузки каталога.')).finally(() => setLoading(false));
  }, [requestNumber]);

  const visibleProducts = useMemo(() => prepareProducts(products, search, category, sort), [products, search, category, sort]);

  return <main className="section"><div className="container"><h1>Каталог</h1><CatalogControls search={search} category={category} sort={sort} onSearch={setSearch} onCategory={setCategory} onSort={setSort}/>{loading && <p className="message">Загрузка товаров...</p>}{error && <div className="message"><p>{error}</p><button className="button" onClick={() => setRequestNumber((value) => value + 1)}>Повторить</button></div>}{!loading && !error && <><p>Найдено товаров: {visibleProducts.length}</p><ProductList products={visibleProducts}/></>}</div></main>;
}

