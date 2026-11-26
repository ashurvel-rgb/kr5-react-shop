import { Link } from 'react-router-dom';
export default function CartPage() { return <main className="section"><div className="container"><h1>Корзина</h1><p className="message">Корзина пока пуста.</p><Link className="button" to="/catalog">Перейти в каталог</Link></div></main>; }

