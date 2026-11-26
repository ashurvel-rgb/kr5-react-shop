import { Link } from 'react-router-dom'; export default function NotFoundPage(){return <main className="section"><div className="container empty"><p className="eyebrow green">Ошибка 404</p><h1>Страница не найдена</h1><p>Проверьте адрес или вернитесь на главную.</p><Link className="button" to="/">На главную</Link></div></main>}

