import { NavLink } from 'react-router-dom';
export default function Header({ cartCount, dark, onTheme }) {
  const linkClass = ({isActive}) => isActive ? 'nav__link nav__link--active' : 'nav__link';
  return <header className="header"><div className="container header__inner"><NavLink to="/" className="logo">URBAN SET</NavLink><nav className="nav"><NavLink className={linkClass} to="/catalog">Каталог</NavLink><NavLink className={linkClass} to="/order">Заказ</NavLink><NavLink className={linkClass} to="/cart">Корзина <span className="badge">{cartCount}</span></NavLink><button className="icon-button" onClick={onTheme} aria-label="Сменить тему">{dark ? '☀' : '◐'}</button></nav></div></header>;
}

