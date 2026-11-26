import { NavLink } from 'react-router-dom';
export default function Header() { return <header className="site-header"><div className="container header-inner"><NavLink className="logo" to="/">React-магазин</NavLink><nav><NavLink to="/">Главная</NavLink><NavLink to="/catalog">Каталог</NavLink><NavLink to="/order">Заявка</NavLink><NavLink to="/cart">Корзина</NavLink></nav></div></header>; }

